import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  // A alias for the variable can be setted into @Input / @Output like the example
  // If you don't want to use an alias, can leave it empty, as @Input()
  @Input('is-favorite') isFavorite: boolean = false;
  @Output('change') favoriteChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteChange.emit({
      newValue: this.isFavorite
    });
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean
}
