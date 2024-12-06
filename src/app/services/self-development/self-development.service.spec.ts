import { TestBed } from '@angular/core/testing';

import { SelfDevelopmentService } from './self-development.service';

describe('SelfDevelopmentService', () => {
  let service: SelfDevelopmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfDevelopmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
