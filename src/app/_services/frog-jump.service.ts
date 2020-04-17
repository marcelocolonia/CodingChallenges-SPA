import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrogJumpService {
  constructor() {}

  run(start: number, end: number, distance: number): number {
    let jumps = 0;
    while (jumps * distance + start < end) {
      jumps++;
    }

    return jumps;
  }
}
