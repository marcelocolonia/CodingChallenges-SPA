import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

/**
 * Have the function LetterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string with
 * the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u)
 * and finally return this modified string.
 *
 * Examples
 *
 * Input: "hello*3"
 * Output: Ifmmp*3
 *
 * Input: "fun times!"
 * Output: gvO Ujnft!
 */
@Injectable({
  providedIn: 'root',
})
export class LetterChangesService {
  constructor() {}

  run(str: string): string {
    let result = '';

    for (let index = 0; index < str.length; index++) {
      result += this._getNextChar(str.substr(index, 1));
    }

    return result;
  }

  private _getNextChar(char: string): string {
    const charcode = char.charCodeAt(0);

    if (
      (charcode >= 65 && charcode <= 90) || // [A-Z]
      (charcode >= 97 && charcode <= 122) // [a-z]
    ) {
      return this._getNextLetter(charcode);
    }

    return char;
  }

  private _getNextLetter(code: number): string {

    if (code === 90 || code === 122) {
      // Z or z
      return 'A';
    }

    code++;

    switch (code) {
      case 101:
        code = 69; // E
        break;
      case 105:
        code = 73; // I
        break;
      case 111:
        code = 79; // O
        break;
      case 117:
        code = 85; // U
        break;
      default:
        break;
    }

    return String.fromCharCode(code);
  }
}
