import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReturnComponent } from './text-return.component';

describe('TextReturnComponent', () => {
  let component: TextReturnComponent;
  let fixture: ComponentFixture<TextReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
