import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiLibExistingAppComponent } from './shared-ui-lib-existing-app.component';

describe('SharedUiLibExistingAppComponent', () => {
  let component: SharedUiLibExistingAppComponent;
  let fixture: ComponentFixture<SharedUiLibExistingAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedUiLibExistingAppComponent]
    });
    fixture = TestBed.createComponent(SharedUiLibExistingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
