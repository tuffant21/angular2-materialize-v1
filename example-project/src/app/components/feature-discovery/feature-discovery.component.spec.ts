import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatureDiscoveryComponent } from './feature-discovery.component';

describe('FeatureDiscoveryComponent', () => {
  let component: FeatureDiscoveryComponent;
  let fixture: ComponentFixture<FeatureDiscoveryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
