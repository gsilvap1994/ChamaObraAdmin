import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicTemplateComponent } from './public-template/public-template.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '', component: PublicTemplateComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'reset', component: ResetPasswordComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
