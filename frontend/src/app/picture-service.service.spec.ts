import { TestBed } from '@angular/core/testing';

import { PictureServiceService } from './picture-service.service';

describe('PictureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PictureServiceService = TestBed.get(PictureServiceService);
    expect(service).toBeTruthy();
  });
});
