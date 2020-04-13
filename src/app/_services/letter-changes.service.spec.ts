import { TestBed } from '@angular/core/testing';

import { LetterChangesService } from './letter-changes.service';

describe('LetterChangesService', () => {
  let service: LetterChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should modify the string using the algorithm', () => {

    [
      { str: 'hello*3', expected: 'Ifmmp*3' },
      { str: 'fun times!', expected: 'gvO Ujnft!' },
      { str: 'MaRc310 c010n1A zZz', expected: 'NbSd310 d010O1B AAA' }
    ]
    .forEach(parm => {

      expect(service.run(parm.str)).toEqual(parm.expected);

    });

  });
});
