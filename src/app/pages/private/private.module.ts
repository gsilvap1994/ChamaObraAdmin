import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { HandlePrivateComponent } from './handle-private.component';
import { ProfessionalDashComponent } from './professional-dash/professional-dash.component';
import { ProfessionalDetailsComponent } from './professional-dash/professional-details/professional-details.component';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { ClientDetailsComponent } from './client-dash/client-details/client-details.component';
import { ProfessionalValidationDashComponent } from './professional-validation-dash/professional-validation-dash.component';
import { ProfessionalValidationDetailsComponent } from './professional-validation-dash/professional-validation-details/professional-validation-details.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { ServiceDashComponent } from './service-dash/service-dash.component';
import { ServiceDetailsComponent } from './service-dash/service-details/service-details.component';
import { PoliciesComponent } from './policies/policies.component';
import { VariablesComponent } from './variables/variables.component';


@NgModule({
  declarations: [
    HandlePrivateComponent,
    ProfessionalDashComponent,
    ProfessionalDetailsComponent,
    ClientDashComponent,
    ClientDetailsComponent,
    ProfessionalValidationDashComponent,
    ProfessionalValidationDetailsComponent,
    AdminDashComponent,
    PoliciesComponent,
    ServiceDashComponent,
    ServiceDetailsComponent,
    VariablesComponent,
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
    ProfessionalValidationDetailsComponent,
    AdminDashComponent,
    PoliciesComponent,
    ServiceDashComponent,
    ServiceDetailsComponent,
    VariablesComponent,
  ]
})
export class PrivateModule { }
