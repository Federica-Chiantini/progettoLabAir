import { TestBed } from '@angular/core/testing';

import { ApriChiudiMenuService } from './apri-chiudi-menu.service';

describe('ApriChiudiMenuService', () => {
  let service: ApriChiudiMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApriChiudiMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
