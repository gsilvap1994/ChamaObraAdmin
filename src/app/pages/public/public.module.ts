import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';

import { LoginComponent } from './login/login.component';
import { HandlePublicComponent } from './handle-public.component';


@NgModule({
  declarations: [
    LoginComponent,
    HandlePublicComponent
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
    HandlePublicComponent
  ]
})
export class PublicModule { }
