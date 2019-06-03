import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ApplicantsRoutingModule } from './applicants-routing.module';
import { ApplicantsComponent } from './applicants.component';
import { SharedModule } from '@shared/shared.module';
import { LevelApplicantsComponent } from './level-applicants/level-applicants.component';
import { StatusesComponent } from './statuses/statuses.component';
import { StatusesService, ApplicationService } from '@skolera/services';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [ApplicantsComponent, LevelApplicantsComponent, StatusesComponent],
  imports: [
    CommonModule,
    ApplicantsRoutingModule,
    SharedModule,
    CoreModule.forChild()
  ],
  providers: [
      StatusesService,
      ApplicationService,
      DatePipe
  ]
})
export class ApplicantsModule { }
