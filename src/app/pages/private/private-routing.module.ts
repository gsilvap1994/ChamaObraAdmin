import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandlePrivateComponent } from './handle-private.component';
import { ProfessionalDashComponent } from './professional-dash/professional-dash.component';
import { ProfessionalDetailsComponent } from './professional-dash/professional-details/professional-details.component';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { ClientDetailsComponent } from './client-dash/client-details/client-details.component';
import { ProfessionalValidationDashComponent } from './professional-validation-dash/professional-validation-dash.component';
import { ProfessionalValidationDetailsComponent } from './professional-validation-dash/professional-validation-details/professional-validation-details.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { PoliciesComponent } from './policies/policies.component';
import { ServiceDashComponent } from './service-dash/service-dash.component';
import { ServiceDetailsComponent } from './service-dash/service-details/service-details.component';

const routes: Routes = [
  {
    path: '', component: HandlePrivateComponent,
    children: [
      {
        path: 'area-de-profissionais', component: ProfessionalDashComponent,
        children:[
          {
            path: ':id', component: ProfessionalDetailsComponent
          }
        ]
      },
      {
        path: 'area-de-contratantes', component: ClientDashComponent,
        children: [
          {
            path: ':id', component: ClientDetailsComponent
          }
        ]
      },
      {
        path: 'validacao-profissionais', component: ProfessionalValidationDashComponent,
        children: [
          {
            path: ':id', component: ProfessionalValidationDetailsComponent
          }
        ]
      },
      {
        path: 'servicos', component: ServiceDashComponent,
        children: [
          {
            path: ':id', component: ServiceDetailsComponent
          }
        ]
      },
      {
        path: 'administradores', component: AdminDashComponent
      },
      {
        path: 'politica', component: PoliciesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
