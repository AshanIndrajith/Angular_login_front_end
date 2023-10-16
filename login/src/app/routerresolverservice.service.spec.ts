import { TestBed } from '@angular/core/testing';

import { RouterresolverserviceService } from './routerresolverservice.service';

describe('RouterresolverserviceService', () => {
  let service: RouterresolverserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterresolverserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
