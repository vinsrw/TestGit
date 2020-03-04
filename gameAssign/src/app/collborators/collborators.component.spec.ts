import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollboratorsComponent } from './collborators.component';

describe('CollboratorsComponent', () => {
  let component: CollboratorsComponent;
  let fixture: ComponentFixture<CollboratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollboratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
