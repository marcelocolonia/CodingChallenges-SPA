import { Injectable } from '@angular/core';

/**
 * A non-empty array A consisting of N integers is given. The array contains an odd number
 * of elements, and each element of the array can be paired with another element that has
 * the same value, except for one element that is left unpaired.
 *
 * Write a function:
 * class Solution { public int solution(int[] A); }
 * that, given an array A consisting of N integers fulfilling the above conditions, returns
 * the value of the unpaired element.
 */
@Injectable({
  providedIn: 'root',
})
export class OddOccurrencesInArrayService {
  constructor() {}

  run(array: number[]): number {
    const paired: number[] = [];

    if (array?.length === 0) {
      return 0;
    }

    for (const element of array) {
      //  already evaluated and paired
      if (paired.includes(element)) {
        continue;
      }

      const occurrences = array.filter((x) => x === element);

      if (occurrences.length === 1) {
        return element;
      }

      paired.push(element);
    }

    return 0;
  }
}
