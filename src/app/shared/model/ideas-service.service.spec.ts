/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IdeasServiceService } from './ideas-service.service';

describe('IdeasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeasServiceService]
    });
  });

  it('should ...', inject([IdeasServiceService], (service: IdeasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
