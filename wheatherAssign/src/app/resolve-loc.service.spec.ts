import { TestBed } from '@angular/core/testing';

import { ResolveLocService } from './resolve-loc.service';

describe('ResolveLocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveLocService = TestBed.get(ResolveLocService);
    expect(service).toBeTruthy();
  });
});
