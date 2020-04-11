import { TestBed } from '@angular/core/testing';

import { FindIntersectionService } from './find-intersection.service';

describe('FindIntersectionService', () => {
  let service: FindIntersectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FindIntersectionService
      ]
    });
    service = TestBed.inject(FindIntersectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find the intersection between two arrays', () => {

    [
      { one: [1, 3, 4, 7, 13], two: [1, 2, 4, 13, 15], expected: [1, 4, 13] },
      { one: [1, 3, 9, 10, 17, 18], two: [1, 4, 9, 10], expected: [1, 9, 10] },
      { one: [1, 4, 5], two: [ 2, 6, 8 ], expected: [] }
    ]
    .forEach(parms => {

      const result = service.run(parms.one, parms.two);

      expect(result).toEqual(parms.expected);

    });

  });
});
