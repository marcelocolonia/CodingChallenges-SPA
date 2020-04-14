import { TestBed } from '@angular/core/testing';

import { FirstReverseService } from './first-reverse.service';

/**
 * Have the function FirstReverse(str) take the str parameter being passed and return
 * the string in reversed order. For example: if the input string is "Hello World and Coders"
 * then your program should return the string sredoC dna dlroW olleH.
 *
 */
describe('FirstReverseService', () => {
  let service: FirstReverseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstReverseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the reversed string', () => {

    [
      { str: 'Hello World and Coders', expected: 'sredoC dna dlroW olleH' },
      { str: 'coderbyte', expected: 'etybredoc' },
      { str: 'I Love Code', expected: 'edoC evoL I' }
    ]
    .forEach(parm => {

      expect(service.run(parm.str)).toEqual(parm.expected);

    });

  });
});
