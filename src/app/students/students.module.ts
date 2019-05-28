import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentsComponent } from './students.component';
import { SharedModule } from '@shared/shared.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { GuardianFormComponent } from './guardian-form/guardian-form.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
    declarations: [
        StudentAdmissionComponent,
        StudentsComponent,
        StudentProfileComponent,
        GuardianFormComponent
    ],
    imports: [
        CommonModule,
        StudentsRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class StudentsModule { }
