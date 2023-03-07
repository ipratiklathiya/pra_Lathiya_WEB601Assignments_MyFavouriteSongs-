import { TestBed } from '@angular/core/testing';

import { MyFavouriteSongsService } from './my-favourite-songs.service';

describe('MyFavouriteSongsService', () => {
  let service: MyFavouriteSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFavouriteSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
