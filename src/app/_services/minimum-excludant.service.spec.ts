import { TestBed } from '@angular/core/testing';

import { MinimumExcludantService } from './minimum-excludant.service';

describe('MinimumExcludantService', () => {
  let service: MinimumExcludantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimumExcludantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud find the smallest number not present in the sets', () => {
    [
      { sets: [[1], [5], [1, 2], [2, 3], [3, 4], [4, 5]], expected: 6 },
    ]
    .forEach((parm) => {

      expect(service.run(parm.sets)).toEqual(parm.expected);

    });
  });
});
