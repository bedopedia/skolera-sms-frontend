import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionPreviousDetailsComponent } from './admission-previous-details.component';

describe('AdmissionPreviousDetailsComponent', () => {
  let component: AdmissionPreviousDetailsComponent;
  let fixture: ComponentFixture<AdmissionPreviousDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionPreviousDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionPreviousDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
