import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'entrar', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule),
  },
  {
    path: '', loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
