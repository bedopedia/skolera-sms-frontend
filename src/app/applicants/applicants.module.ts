import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantsRoutingModule } from './applicants-routing.module';
import { ApplicantsComponent } from './applicants.component';
import { SharedModule } from '@shared/shared.module';
import { LevelApplicantsComponent } from './level-applicants/level-applicants.component';
import { StatusesComponent } from './statuses/statuses.component';

@NgModule({
  declarations: [ApplicantsComponent, LevelApplicantsComponent, StatusesComponent],
  imports: [
    CommonModule,
    ApplicantsRoutingModule,
    SharedModule
  ]
})
export class ApplicantsModule { }
