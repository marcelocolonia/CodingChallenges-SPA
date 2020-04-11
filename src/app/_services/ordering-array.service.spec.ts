import { TestBed } from '@angular/core/testing';

import { OrderingArrayService } from './ordering-array.service';

describe('OrderingArrayService', () => {
  let service: OrderingArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderingArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should order an array correctly', () => {

    [
      { array: [5, 2, 3, 9, 1], expected: [1, 2, 3, 5, 9]},
      { array: [10, 2, 5, 6, 5, 3], expected: [2, 3, 5, 5, 6, 10]},
      { array: [9, 8, 7, -10, 1, 0, 7], expected: [-10, 0, 1, 7, 7, 8, 9] }
    ]
    .forEach(parm => {

      expect(service.run(parm.array)).toEqual(parm.expected);

    });

  });
});
