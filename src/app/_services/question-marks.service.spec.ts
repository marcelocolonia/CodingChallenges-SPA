import { TestBed } from '@angular/core/testing';

import { QuestionMarksService } from './question-marks.service';

describe('QuestionMarksService', () => {
  let service: QuestionMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test if strings follow the expected pattern', () => {

    [
      { str: 'arrb6???4xxbl5???eee5', expected: true },
      { str: 'aa6?9', expected: false },
      { str: 'arrb6???4xxbl5???eee5', expected: true },
      { str: 'aunsn7????3skao??', expected: false },
      { str: '9s9???2aos?4??1aa8???2', expected: true }
    ]
    .forEach(parm => {

      expect(service.run(parm.str)).toEqual(parm.expected);

    });


  });
});
