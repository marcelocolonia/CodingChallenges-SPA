import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindMissingElementService {

  constructor() { }

  run(array: number[]): number {

    for (let index = 1; index <= array.length; index++) {
      if (!array.includes(index)) {
        return index;
      }
    }

    return null;
  }
}
