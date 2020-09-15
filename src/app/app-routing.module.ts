import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/auth/auth.guard';


const routes: Routes = [
  {
    path: 'entrar',
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
