import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';

import { LoginComponent } from './login/login.component';
import { PublicTemplateComponent } from './public-template/public-template.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    PublicTemplateComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PublicRoutingModule
  ],
  exports: [
    LoginComponent,
    PublicTemplateComponent
  ]
})
export class PublicModule { }
