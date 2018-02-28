import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses() {
    return [
      {
        title: "course1",
        isFavorite: false
      }, 
      {
        title: "course2",
        isFavorite: false
      }, 
      {
        title: "course3",
        isFavorite: true
      }
    ];
  }

}
