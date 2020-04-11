import { Injectable } from '@angular/core';

/**
 * https://www.coderbyte.com/editor/Find%20Intersection:JavaScript
 *
 * Have the function FindIntersection(strArr) read the array of strings stored in strArr
 * which will contain 2 elements: the first element will represent a list of comma-separated
 * numbers sorted in ascending order, the second element will represent a second list of
 * comma-separated numbers (also sorted). Your goal is to return a comma-separated string
 * containing the numbers that occur in elements of strArr in sorted order. If there is no
 * intersection, return the string false.
 *
 * Examples
 *
 * Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
 * Output: 1,4,13
 *
 * Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
 * Output: 1,9,10
 *
 */
@Injectable({
  providedIn: 'root',
})
export class FindIntersectionService {
  constructor() {}

  run(one: number[], two: number[]): number[] {

    const result = [];
    //  iterate through the elements of array one
    //  tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < one.length; index++) {
      //  attempts to find the correspondent element in array two
      const intersection = two.indexOf(one[index]);
      if (intersection > -1) {
        result.push(one[index]);
      }
    }

    return result;
  }
}
