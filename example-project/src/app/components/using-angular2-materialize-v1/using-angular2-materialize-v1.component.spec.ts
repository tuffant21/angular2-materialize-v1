import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsingAngular2MaterializeV1Component } from './using-angular2-materialize-v1.component';

describe('UsingAngular2MaterializeV1Component', () => {
  let component: UsingAngular2MaterializeV1Component;
  let fixture: ComponentFixture<UsingAngular2MaterializeV1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingAngular2MaterializeV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingAngular2MaterializeV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
