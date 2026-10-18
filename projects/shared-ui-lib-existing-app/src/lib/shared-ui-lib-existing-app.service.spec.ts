import { TestBed } from '@angular/core/testing';

import { SharedUiLibExistingAppService } from './shared-ui-lib-existing-app.service';

describe('SharedUiLibExistingAppService', () => {
  let service: SharedUiLibExistingAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedUiLibExistingAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
