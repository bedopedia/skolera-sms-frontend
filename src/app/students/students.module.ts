import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentsComponent } from './students.component';
import { SharedModule } from '@shared/shared.module';
import { AdmissionStudentDetailsComponent } from './student-admission/admission-student-details/admission-student-details.component';
import { AdmissionParentDetailsComponent } from './student-admission/admission-parent-details/admission-parent-details.component';
import { AdmissionStudentSiblingsComponent } from './student-admission/admission-student-siblings/admission-student-siblings.component';
import { AdmissionPreviousDetailsComponent } from './student-admission/admission-previous-details/admission-previous-details.component';
import { AdmissionPreviousFeesComponent } from './student-admission/admission-previous-fees/admission-previous-fees.component';
import { AdmissionAdditionalDetailsComponent } from './student-admission/admission-additional-details/admission-additional-details.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
  declarations: [StudentAdmissionComponent, StudentsComponent, AdmissionStudentDetailsComponent, AdmissionParentDetailsComponent, AdmissionStudentSiblingsComponent, AdmissionPreviousDetailsComponent, AdmissionPreviousFeesComponent, AdmissionAdditionalDetailsComponent, StudentProfileComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
