import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavTitleComponent } from './nav-title.component';

describe('NavTitleComponent', () => {
  let component: NavTitleComponent;
  let fixture: ComponentFixture<NavTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
