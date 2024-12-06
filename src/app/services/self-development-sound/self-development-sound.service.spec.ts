import { TestBed } from '@angular/core/testing';

import { SelfDevelopmentSoundService } from './self-development-sound.service';

describe('SelfDevelopmentSoundService', () => {
  let service: SelfDevelopmentSoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfDevelopmentSoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
