import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntiteGuard } from 'src/app/core/services/entite.guard';
import { ProviderListComponent } from './components/provider-list/provider-list.component';

const routes: Routes = [
  {path:"", component: ProviderListComponent, canActivate: [EntiteGuard]},
  {path:"providers", component: ProviderListComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
