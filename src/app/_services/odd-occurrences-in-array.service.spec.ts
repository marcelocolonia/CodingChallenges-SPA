import { TestBed } from '@angular/core/testing';

import { OddOccurrencesInArrayService } from './odd-occurrences-in-array.service';

describe('OddOccurrencesInArrayService', () => {
  let service: OddOccurrencesInArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OddOccurrencesInArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find the unpaired element in an array', () => {

    [
      { array: [9, 3, 9, 3, 3, 9, 7, 9], expected: 7 },
      { array: [], expected: 0 },
      { array: [1, 2, 3 ], expected: 1 },
      { array: [ 1, 1, 2, 2, 3, 3 ], expected: 0 }
    ]
    .forEach(parm => {

      expect(service.run(parm.array)).toEqual(parm.expected);

    });
  });
});
