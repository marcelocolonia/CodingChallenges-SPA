import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinimumExcludantService {

  constructor() { }

  run(sets: any[]): number {

    let attempt = 0;
    let found = true;

    while (found) {

      attempt++;

      found = false;

      for (const set of sets) {
        if (set.includes(attempt)) {
          found = true;
          break;
        }
      }

    }

    return attempt;

  }
}
