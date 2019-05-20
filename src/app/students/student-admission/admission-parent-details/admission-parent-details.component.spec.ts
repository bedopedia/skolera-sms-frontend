import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionParentDetailsComponent } from './admission-parent-details.component';

describe('AdmissionParentDetailsComponent', () => {
  let component: AdmissionParentDetailsComponent;
  let fixture: ComponentFixture<AdmissionParentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionParentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionParentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
