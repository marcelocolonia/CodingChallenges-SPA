import { Injectable } from '@angular/core';

/**
 * Have the function BinaryReversal(str) take the str parameter being passed, which will
 * be a positive integer, take its binary representation (padded to the nearest N * 8 bits),
 * reverse that string of bits, and then finally return the new reversed string in decimal form.
 * For example: if str is "47" then the binary version of this integer is 101111 but we pad
 * it to be 00101111. Your program should reverse this binary string which then becomes: 11110100
 * and then finally return the decimal version of this string, which is 244.
 *
 * Examples
 *
 * Input: "213"
 * Output: 171
 *
 * Input: "4567"
 * Output: 60296
 */
@Injectable({
  providedIn: 'root',
})
export class BinaryReversalService {
  constructor() {}

  run(str: string): string {

    const binary = (+str).toString(2);

    const reversed = this._reverseString(binary);

    const padded = this._padBinary(reversed, 8);

    return parseInt(padded, 2).toString();
  }

  private _reverseString(str: string): string {
    let reversed = '';
    for (let index = str.length - 1; index >= 0; index--) {
      reversed += str.substr(index, 1);
    }
    return reversed;
  }

  private _padBinary(str: string, bits: number): string {

    let padded = '';

    while (true) {
      //  extracts a chunk of bits off the given number
      const block = str.substr(padded.length, bits);
      if (!block) {
        break;
      }
      padded += block.padEnd(bits, '0');
    }

    return padded;
  }
}
