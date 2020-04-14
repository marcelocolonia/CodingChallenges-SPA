import { Injectable } from '@angular/core';

/**
 * Have the function LongestWord(sen) take the sen parameter being passed and
 * return the largest word in the string. If there are two or more words that
 * are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 */
@Injectable({
  providedIn: 'root'
})
export class LongestWordService {

  constructor() { }

  run(list: string): string {

    const array = list.split(' ');

    let longestWord = '';

    array.forEach(element => {

      const match = element.match(/([a-zA-Z])\w*/);

      const word = match ? match[0] : '';

      if (word.length > longestWord.length) {
        longestWord = word;
      }

    });

    return longestWord;
  }
}
