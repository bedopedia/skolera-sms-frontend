import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
    {
        path: '', component: StudentsComponent
    },
    {
        path: 'admission', component: StudentAdmissionComponent
    },
    {
        path: 'profile/:id', component: StudentProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
