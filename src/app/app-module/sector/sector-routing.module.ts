import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntiteGuard } from 'src/app/core/services/entite.guard';
import { SectorComponent } from './sector/sector.component';

const routes: Routes = [
  {path:"", component: SectorComponent, canActivate: [EntiteGuard]},
  {path:"sectors", component: SectorComponent, canActivate: [EntiteGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectorRoutingModule { }
