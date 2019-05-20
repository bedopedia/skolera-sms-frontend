import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionStudentDetailsComponent } from './admission-student-details.component';

describe('AdmissionStudentDetailsComponent', () => {
  let component: AdmissionStudentDetailsComponent;
  let fixture: ComponentFixture<AdmissionStudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionStudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
