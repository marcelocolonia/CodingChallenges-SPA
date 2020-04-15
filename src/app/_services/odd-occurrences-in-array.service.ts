import { Injectable } from '@angular/core';

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
