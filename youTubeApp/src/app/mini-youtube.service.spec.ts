import { TestBed } from '@angular/core/testing';

import { MiniYoutubeService } from './mini-youtube.service';

describe('MiniYoutubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiniYoutubeService = TestBed.get(MiniYoutubeService);
    expect(service).toBeTruthy();
  });
});
