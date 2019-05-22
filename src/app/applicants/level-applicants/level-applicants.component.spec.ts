import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelApplicantsComponent } from './level-applicants.component';

describe('LevelApplicantsComponent', () => {
  let component: LevelApplicantsComponent;
  let fixture: ComponentFixture<LevelApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
