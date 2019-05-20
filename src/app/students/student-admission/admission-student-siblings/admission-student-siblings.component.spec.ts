import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionStudentSiblingsComponent } from './admission-student-siblings.component';

describe('AdmissionStudentSiblingsComponent', () => {
  let component: AdmissionStudentSiblingsComponent;
  let fixture: ComponentFixture<AdmissionStudentSiblingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionStudentSiblingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionStudentSiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
