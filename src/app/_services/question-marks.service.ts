import { Injectable } from '@angular/core';

/**
 * https://www.coderbyte.com/editor/Questions%20Marks:JavaScript
 *
 * Have the function QuestionsMarks(str) take the str string parameter, which will contain
 * single digit numbers, letters, and question marks, and check if there are exactly 3
 * question marks between every pair of two numbers that add up to 10. If so, then your program
 * should return the string true, otherwise it should return the string false. If there aren't any
 * two numbers that add up to 10 in the string, then your program should return false as well.
 *
 * For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because
 * there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
 *
 * Examples
 *
 * Input: "aa6?9"
 * Output: false
 *
 * Input: "acc?7??sss?3rr1??????5"
 * Output: true
 */
@Injectable({
  providedIn: 'root',
})
export class QuestionMarksService {
  constructor() {}

  run(str: string): boolean {
    let isValidString = false;
    let questionMarksCount = 0;
    let prevNumber = 0;
    let nextNumber = 0;
    let char: any;

    for (let index = 0; index < str.length; index++) {
      //  gets the next char to be evaluated
      char = str.substr(index, 1);

      nextNumber = +char;

      //  the sum of this number and the previous one is 10
      if (nextNumber && nextNumber + prevNumber === 10) {
        //  there has to be exactly 3 question marks between two numbers that sum up 10
        if (questionMarksCount !== 3) {
          return false;
        }
        questionMarksCount = 0;
        prevNumber = 0;
        isValidString = true;
        continue;
      }

      if (nextNumber) {
        questionMarksCount = 0;
        prevNumber = nextNumber;
        continue;
      }

      if (char === '?') {
        questionMarksCount++;
      }


    }

    return isValidString;
  }
}
