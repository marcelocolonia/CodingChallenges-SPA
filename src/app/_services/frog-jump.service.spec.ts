import { TestBed } from '@angular/core/testing';

import { FrogJumpService } from './frog-jump.service';

describe('FrogJumpService', () => {
  let service: FrogJumpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrogJumpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the number of stesp to get from point A to B', () => {

    [
      { start: 10, end: 85, distance: 30, expected: 3 },
      { start: 10, end: 10, distance: 30, expected: 0 },
      { start: 1, end: 1000000000, distance: 1, expected: 999999999 }
    ]
    .forEach(parm => {

      expect(service.run(parm.start, parm.end, parm.distance)).toEqual(parm.expected);

    });
  });
});
