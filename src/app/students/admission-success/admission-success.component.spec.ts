import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionSuccessComponent } from './admission-success.component';

describe('AdmissionSuccessComponent', () => {
  let component: AdmissionSuccessComponent;
  let fixture: ComponentFixture<AdmissionSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
