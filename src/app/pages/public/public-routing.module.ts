import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandlePublicComponent } from './handle-public.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: HandlePublicComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
