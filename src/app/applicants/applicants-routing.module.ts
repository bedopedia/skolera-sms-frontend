import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantsComponent } from './applicants.component';
import { LevelApplicantsComponent } from './level-applicants/level-applicants.component';

const routes: Routes = [
    {
        path: '', component: ApplicantsComponent
    },
    {
        path: 'level/:id', component: LevelApplicantsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantsRoutingModule { }
