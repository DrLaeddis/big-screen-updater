import { TestBed } from '@angular/core/testing';

import { FavoriteSoundService } from './favorite-sound.service';

describe('FavoriteSoundService', () => {
  let service: FavoriteSoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteSoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
