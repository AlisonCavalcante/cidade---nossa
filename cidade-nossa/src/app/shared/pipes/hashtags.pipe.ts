import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtags',
})
export class HashtagsPipe implements PipeTransform {
  transform(value: any): any {
    let hashTagFinal = '';
    let arrayHashtags = value.split(' ');
    if (arrayHashtags.length > 1) {
      for (let i = 0; i < arrayHashtags.length; i++) {
        if (arrayHashtags[i].charAt(0) === '#') {
          hashTagFinal += '' + arrayHashtags[0];
        }
        hashTagFinal += ` #${arrayHashtags[0]}`;
      }
    } else {
      if (arrayHashtags[0].charAt(0) === '#') {
        hashTagFinal = arrayHashtags[0];
      } else {
        hashTagFinal = `#${arrayHashtags[0]}`;
      }
    }
    return hashTagFinal;
  }
}
