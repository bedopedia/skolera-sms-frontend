import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionAdditionalDetailsComponent } from './admission-additional-details.component';

describe('AdmissionAdditionalDetailsComponent', () => {
  let component: AdmissionAdditionalDetailsComponent;
  let fixture: ComponentFixture<AdmissionAdditionalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionAdditionalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
