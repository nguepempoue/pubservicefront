import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntiteGuard } from 'src/app/core/services/entite.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent, canActivate: [EntiteGuard]},
  {path:"dashboard", component: HomeComponent, canActivate: [EntiteGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
