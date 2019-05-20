import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';

const routes: Routes = [
    {
        path: '', component: StudentsComponent
    },
    {
        path: 'admission', component: StudentAdmissionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
