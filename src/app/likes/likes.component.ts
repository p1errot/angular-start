import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input('is-liked') isLiked: boolean = false;
  @Output('change-like') onchange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.onchange.emit();
    console.log("Like: ", this.isLiked);
  }

}
