import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentsComponent } from './students.component';
import { SharedModule } from '@shared/shared.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { GuardianFormComponent } from './guardian-form/guardian-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmissionSuccessComponent } from './admission-success/admission-success.component';
import { ApplicationService, StatusesService, AgeService } from '@skolera/services';
import { CoreModule } from '@core/core.module';
import { EditApplicationComponent } from './edit-application/edit-application.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
// import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
    declarations: [
        StudentAdmissionComponent,
        StudentsComponent,
        StudentProfileComponent,
        GuardianFormComponent,
        AdmissionSuccessComponent,
        EditApplicationComponent,
        ApplicationFormComponent
    ],
    imports: [
        CommonModule,
        StudentsRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        CoreModule.forChild()
    ],
    providers: [
        ApplicationService,
        DatePipe,
        StatusesService,
        AgeService
    ]
})
export class StudentsModule { }
