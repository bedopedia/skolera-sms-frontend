import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AdmissionSuccessComponent } from './admission-success/admission-success.component';
import { AuthenticationGuard } from '@core/guards';
import { EditApplicationComponent } from './edit-application/edit-application.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'admission'
    },
    {
        path: 'admission', component: StudentAdmissionComponent
    },
    {
        path: 'admission-success', component: AdmissionSuccessComponent
    },
    {
        path: 'profile/:id', component: StudentProfileComponent, canActivate: [AuthenticationGuard]
    },
    {
        path: 'profile/edit/:id', component: EditApplicationComponent, canActivate: [AuthenticationGuard]
    },
    {
        path: '**', redirectTo: 'admission'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
