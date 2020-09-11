import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { SharedModule } from 'src/shared/shared.module';

import { HandlePrivateComponent } from './handle-private.component';
import { ProfessionalDashComponent } from './professional-dash/professional-dash.component';


@NgModule({
  declarations: [
    HandlePrivateComponent,
    ProfessionalDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRoutingModule,
    SharedModule
  ],
  exports: [
    HandlePrivateComponent,
    ProfessionalDashComponent
  ]
})
export class PrivateModule { }
