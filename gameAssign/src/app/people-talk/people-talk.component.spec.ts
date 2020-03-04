import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTalkComponent } from './people-talk.component';

describe('PeopleTalkComponent', () => {
  let component: PeopleTalkComponent;
  let fixture: ComponentFixture<PeopleTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
