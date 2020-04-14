import { TestBed } from '@angular/core/testing';

import { BinaryGapService } from './binary-gap.service';

describe('BinaryGapService', () => {
  let service: BinaryGapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinaryGapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a number binary gap', () => {

    [
      { integer: 1041, gap: 5 },
      { integer: 32, gap: 0 },
      { integer: 529, gap: 4 },
      { integer: 9, gap: 2 },
      { integer: 20, gap: 1 },
      { integer: 15, gap: 0 }
    ]
    .forEach(parm => {

      expect(service.run(parm.integer)).toEqual(parm.gap);

    });
  });
});
