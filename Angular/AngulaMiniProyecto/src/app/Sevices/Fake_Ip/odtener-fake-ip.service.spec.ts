import { TestBed } from '@angular/core/testing';

import { OdtenerFakeIpService } from './odtener-fake-ip.service';

describe('OdtenerFakeIpService', () => {
  let service: OdtenerFakeIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdtenerFakeIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
