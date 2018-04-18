import { TestBed, inject } from '@angular/core/testing';

import { ChartDataServiceService } from './chart-data-service.service';

describe('ChartDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartDataServiceService]
    });
  });

  it('should be created', inject([ChartDataServiceService], (service: ChartDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
