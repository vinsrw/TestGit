import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonNgIfComponent } from './radio-button-ng-if.component';

describe('RadioButtonNgIfComponent', () => {
  let component: RadioButtonNgIfComponent;
  let fixture: ComponentFixture<RadioButtonNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
