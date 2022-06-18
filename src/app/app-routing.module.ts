import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo: '/login',
    pathMatch: 'full'
},
{
  path : 'login',
  loadChildren: () => import('./sign/sign.module').then(m => m.SignModule)
},
{
  path : 'app-content',
  loadChildren: () => import('./app-module/app-module.module').then(m => m.AppModuleModule)
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
