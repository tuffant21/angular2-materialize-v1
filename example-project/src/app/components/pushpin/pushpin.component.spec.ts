import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushpinComponent } from './pushpin.component';

describe('PushpinComponent', () => {
  let component: PushpinComponent;
  let fixture: ComponentFixture<PushpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
