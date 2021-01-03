import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {PickersComponent} from './pickers.component';

describe('PickersComponent', () => {
  let component: PickersComponent;
  let fixture: ComponentFixture<PickersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PickersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
