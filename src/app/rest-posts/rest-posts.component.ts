import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-rest-posts',
  templateUrl: './rest-posts.component.html',
  styleUrls: ['./rest-posts.component.scss']
})
export class RestPostsComponent implements OnInit {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  posts: any[];

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    // Only updates few properties. Check if API supports this method before use it.
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response.json());
      });

    // Updates many properties. 
    // this.http.put(this.url, JSON.stringify(post))
    //   .subscribe(response => {
    //     console.log(response.json());
    //   });
  }

  ngOnInit() {
  }

}
