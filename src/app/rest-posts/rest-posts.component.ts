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
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput)
            console.log('Error filling the form', error.originalError);
          else
            throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        }
      );
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);

    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(() => {},
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else
            throw error;
        });
  }
}
