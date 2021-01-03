import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrollspyComponent } from './scrollspy.component';

describe('ScrollspyComponent', () => {
  let component: ScrollspyComponent;
  let fixture: ComponentFixture<ScrollspyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollspyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
