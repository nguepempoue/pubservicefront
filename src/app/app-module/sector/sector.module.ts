import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectorRoutingModule } from './sector-routing.module';
import { SectorComponent } from './sector/sector.component';


@NgModule({
  declarations: [
    SectorComponent
  ],
  imports: [
    CommonModule,
    SectorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SectorModule { }
