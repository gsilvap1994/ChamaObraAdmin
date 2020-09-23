import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandlePrivateComponent } from './handle-private.component';
import { ProfessionalDashComponent } from './professional-dash/professional-dash.component';
import { ProfessionalDetailsComponent } from './professional-dash/professional-details/professional-details.component';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { ClientDetailsComponent } from './client-dash/client-details/client-details.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
