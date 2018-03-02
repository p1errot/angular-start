import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FavoriteChangeEventArgs } from '../favorite/favorite.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  title = "List of courses";
  courses;
  course = {
    title: "The test for Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  longText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, voluptas. Repudiandae nesciunt possimus incidunt dicta, dolores ut mollitia? Ea explicabo vel officiis dolores, tenetur aut! Doloremque aperiam non ea veniam!";

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite Change: ', eventArgs);
  }

  addCourse() {
    let currentLength: number =  this.courses.length,
      newNumberCourse: number = currentLength + 1;

    this.courses.push({ title: "course" + newNumberCourse, isFavorite: false });
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
