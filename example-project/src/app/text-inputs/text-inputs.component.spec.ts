import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TextInputsComponent} from './text-inputs.component';

describe('TextInputsComponent', () => {
  let component: TextInputsComponent;
  let fixture: ComponentFixture<TextInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
