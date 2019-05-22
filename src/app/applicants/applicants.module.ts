import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantsRoutingModule } from './applicants-routing.module';
import { ApplicantsComponent } from './applicants.component';
import { SharedModule } from '@shared/shared.module';
import { LevelApplicantsComponent } from './level-applicants/level-applicants.component';

@NgModule({
  declarations: [ApplicantsComponent, LevelApplicantsComponent],
  imports: [
    CommonModule,
    ApplicantsRoutingModule,
    SharedModule
  ]
})
export class ApplicantsModule { }
