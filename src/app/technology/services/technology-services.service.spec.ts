import { TestBed } from '@angular/core/testing';

import { TechnologyServicesService } from './technology-services.service';

describe('TechnologyServicesService', () => {
  let service: TechnologyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
