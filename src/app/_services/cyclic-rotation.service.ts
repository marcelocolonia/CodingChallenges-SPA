import { Injectable } from '@angular/core';
/**
 * An array A consisting of N integers is given. Rotation of the array means that each element
 * is shifted right by one index, and the last element of the array is moved to the first place.
 * For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are
 * shifted right by one index and 6 is moved to the first place).
 * The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
 */
@Injectable({
  providedIn: 'root',
})
export class CyclicRotationService {
  constructor() {}

  run(array: number[], steps: number): number[] {
    //  repeats the process once for each step
    for (let index = 0; index < steps; index++) {
      //  removes the last element of the array
      const lastElement = array.splice(array.length - 1);
      //  adds the element to the start of the array
      array.unshift(...lastElement);
    }

    return array;
  }
}
