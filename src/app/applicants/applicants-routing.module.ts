import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantsComponent } from './applicants.component';
import { LevelApplicantsComponent } from './level-applicants/level-applicants.component';
import { StatusesComponent } from './statuses/statuses.component';

const routes: Routes = [
    {
        path: '', component: ApplicantsComponent
    },
    {
        path: 'level/:id', component: LevelApplicantsComponent
    },
    {
        path: 'statuses', component: StatusesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantsRoutingModule { }
