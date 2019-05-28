import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AdmissionSuccessComponent } from './admission-success/admission-success.component';

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
        path: '**', redirectTo: 'admission'
    },
    // {
    //     path: 'profile/:id', component: StudentProfileComponent
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
