import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string) {
    if (!value) return null;

    return value
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !this.isPreposition(word)) {
          return this.capitalize(word);
        } else {
          return word.toLowerCase();
        }
      })
      .join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ]

    return prepositions.includes(word.toLowerCase());
  }

  private capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

}
