import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@core/guards';

const routes: Routes = [
    {
        path: 'students', loadChildren: './students/students.module#StudentsModule'
    },
    {
        path: 'applicants', loadChildren: './applicants/applicants.module#ApplicantsModule'
    },
    {
        path: 'login', loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '**', redirectTo: 'students'
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
