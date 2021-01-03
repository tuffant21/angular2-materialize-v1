import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutoInitComponent } from './auto-init.component';

describe('AutoInitComponent', () => {
  let component: AutoInitComponent;
  let fixture: ComponentFixture<AutoInitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
