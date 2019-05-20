import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionPreviousFeesComponent } from './admission-previous-fees.component';

describe('AdmissionPreviousFeesComponent', () => {
  let component: AdmissionPreviousFeesComponent;
  let fixture: ComponentFixture<AdmissionPreviousFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionPreviousFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionPreviousFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
