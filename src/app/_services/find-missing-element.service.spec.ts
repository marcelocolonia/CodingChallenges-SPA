import { TestBed } from '@angular/core/testing';

import { FindMissingElementService } from './find-missing-element.service';

describe('FindMissingElementService', () => {
  let service: FindMissingElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindMissingElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find the missing element in the array', () => {

    [
      { array: [2, 3, 1, 5], expected: 4 },
      { array: [], expected: null },
      { array: [2, 3, 4, 5], expected: 1 },
      { array: [1], expected: null },
      { array: [2], expected: 1 },
    ]
    .forEach(parm => {
      expect(service.run(parm.array)).toEqual(parm.expected);
    });

  });

  it('should find the missing element in a very long array', () => {

    const array: number[] = [];

    for (let index = 0; index <= 100000; index++) {
      array.push(index);
    }

    array[100000]++;

    expect(service.run(array)).toEqual(100000);

  });
});
