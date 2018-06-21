import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable()
export class RestService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(postData) {
    return this.http.post(this.url, JSON.stringify(postData))
      .catch((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new BadInput(error.json()));
        } else {
          return Observable.throw(new AppError(error.json()));
        }
    });
  }

  updatePost(postData) {
    // Only updates few properties. Check if API supports this method before use it.
    return this.http.patch(this.url + '/' + postData.id, JSON.stringify({ isRead: true }));

    // Updates many properties. 
    // return this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError(error));
        } else {
          return Observable.throw(new AppError(error));
        }
      })
  }

}
