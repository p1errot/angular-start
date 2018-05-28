import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RestService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(postData) {
    return this.http.post(this.url, JSON.stringify(postData));
  }

  updatePost(postData) {
    // Only updates few properties. Check if API supports this method before use it.
    return this.http.patch(this.url + '/' + postData.id, JSON.stringify({ isRead: true }));

    // Updates many properties. 
    // return this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId)
  }

}
