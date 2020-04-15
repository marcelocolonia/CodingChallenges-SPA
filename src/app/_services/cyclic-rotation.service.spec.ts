import { TestBed } from '@angular/core/testing';

import { CyclicRotationService } from './cyclic-rotation.service';

describe('CyclicRotationService', () => {
  let service: CyclicRotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyclicRotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rotate an array to the right by a given number of steps.', () => {

    [
      { array: [3, 8, 9, 7, 6], steps: 3, expected: [9, 7, 6, 3, 8] },
      { array: [1, 2, 3, 4], steps: 4, expected: [1, 2, 3, 4] },
      { array: [0, 0, 0], steps: 1, expected: [0, 0, 0]},
      { array: [3, 8, 9, 7, 6] , steps: 1, expected: [6, 3, 8, 9, 7] },
    ]
    .forEach(parm => {

      expect(service.run(parm.array, parm.steps)).toEqual(parm.expected);

    });

  });
});
