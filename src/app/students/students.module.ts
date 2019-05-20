import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentsComponent } from './students.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [StudentAdmissionComponent, StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
