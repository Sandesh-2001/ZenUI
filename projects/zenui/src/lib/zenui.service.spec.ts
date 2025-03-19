import { TestBed } from '@angular/core/testing';

import { ZenuiService } from './zenui.service';

describe('ZenuiService', () => {
  let service: ZenuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZenuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
