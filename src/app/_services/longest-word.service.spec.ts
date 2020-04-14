import { TestBed } from '@angular/core/testing';

import { LongestWordService } from './longest-word.service';

describe('LongestWordService', () => {
  let service: LongestWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongestWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the longest word from the list', () => {

    [
      { list: 'fun&!! time', expected: 'time' },
      { list: 'I love dogs', expected: 'love' },
      { list: 'The   quick brown fox jumps over the lazy  dog !!!', expected: 'quick' },
    ]
    .forEach(parm => {

      expect(service.run(parm.list)).toEqual(parm.expected);

    });

  });
});
