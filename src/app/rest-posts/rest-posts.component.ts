import { Component, OnInit } from '@angular/core';

import { RestService } from '../shared/rest.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-rest-posts',
  templateUrl: './rest-posts.component.html',
  styleUrls: ['./rest-posts.component.scss']
})
export class RestPostsComponent implements OnInit {
  posts: any[];

  constructor(private service: RestService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response.json();
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput)
            console.log('Error filling the form', error.originalError);
          else
            throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response.json());
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);

          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else
            throw error;
        });
  }
}
