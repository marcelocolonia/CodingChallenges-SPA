import { TestBed } from '@angular/core/testing';

import { BinaryReversalService } from './binary-reversal.service';

describe('BinaryReversalService', () => {
  let service: BinaryReversalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinaryReversalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly binary reverse a string', () => {

    [
      { str: '47', expected: '244' },
      { str: '213', expected: '171' },
      { str: '4567', expected: '60296' },
    ]
    .forEach(parm => {

      expect(service.run(parm.str)).toEqual(parm.expected);

    });
  });
});
