import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderingArrayService {

  constructor() { }

  run(array: number[]): number[] {

    const orderedArray: number[] = [];

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < array.length; index++) {
      this._insertElementIntoRightPosition(array[index], orderedArray);
    }

    return orderedArray;
  }

  private _insertElementIntoRightPosition(element: number, array: number[]): void {

    if (array.length === 0) {
      array.push(element);
      return;
    }

    for (let index = 0; index < array.length; index++) {
      if (element <= array[index]) {
        array.splice(index, 0, element);
        return;
      }
    }

    array.push(element);

  }
}
