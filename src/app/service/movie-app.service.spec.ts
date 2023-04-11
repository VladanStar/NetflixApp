import { TestBed } from '@angular/core/testing';

import { MovieAppService } from './movie-app.service';

describe('MovieAppService', () => {
  let service: MovieAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
