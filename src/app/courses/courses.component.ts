import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  title = "List of courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

}
