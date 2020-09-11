import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandlePrivateComponent } from './handle-private.component';
import { ProfessionalDashComponent } from './professional-dash/professional-dash.component';

const routes: Routes = [
  {
    path: '', component: HandlePrivateComponent,
    children: [
      {
        path: 'area-de-profissionais', component: ProfessionalDashComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
