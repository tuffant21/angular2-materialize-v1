import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParallaxComponent } from './parallax.component';

describe('ParallaxComponent', () => {
  let component: ParallaxComponent;
  let fixture: ComponentFixture<ParallaxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
