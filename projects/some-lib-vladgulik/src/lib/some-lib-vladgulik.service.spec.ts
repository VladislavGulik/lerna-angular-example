import { TestBed } from '@angular/core/testing';

import { SomeLibVladgulikService } from './some-lib-vladgulik.service';

describe('SomeLibVladgulikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeLibVladgulikService = TestBed.get(SomeLibVladgulikService);
    expect(service).toBeTruthy();
  });
});
