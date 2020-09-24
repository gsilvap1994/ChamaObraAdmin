import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from 'src/shared/shared.module';

import { HandlePrivateComponent } from './handle-private.component';
import { ProfessionalDashComponent } from './professional-dash/professional-dash.component';
import { ProfessionalDetailsComponent } from './professional-dash/professional-details/professional-details.component';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { ClientDetailsComponent } from './client-dash/client-details/client-details.component';
import { ProfessionalValidationDashComponent } from './professional-validation-dash/professional-validation-dash.component';
import { ProfessionalValidationDetailsComponent } from './professional-validation-dash/professional-validation-details/professional-validation-details.component';


@NgModule({
  declarations: [
    HandlePrivateComponent,
    ProfessionalDashComponent,
    ProfessionalDetailsComponent,
    ClientDashComponent,
    ClientDetailsComponent,
    ProfessionalValidationDashComponent,
    ProfessionalValidationDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRoutingModule,
    SharedModule,
  ],
  exports: [
    HandlePrivateComponent,
    ProfessionalDashComponent,
    ProfessionalDetailsComponent,
    ClientDashComponent,
    ClientDetailsComponent,
    ProfessionalValidationDashComponent,
  ]
})
export class PrivateModule { }
