import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntiteGuard } from '../core/services/entite.guard';
import { ModulesComponent } from './modules/modules.component';
import { ProviderDetailsComponent } from './provider/components/provider-details/provider-details.component';

const routes: Routes = [
  {
    path:"", component: ModulesComponent, canActivate: [EntiteGuard],

    children: [
      {
        path:"provider-deatils", component: ProviderDetailsComponent
      },
      {
        path : 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path : 'providers',
        loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule)
      },
      {
        path : 'sectors',
        loadChildren: () => import('./sector/sector.module').then(m => m.SectorModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppModuleRoutingModule { }
