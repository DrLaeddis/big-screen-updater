import { TestBed } from '@angular/core/testing';

import { SocketTopicsService } from './socket-topics.service';

describe('SocketTopicsService', () => {
  let service: SocketTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
