import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';


@NgModule({
  declarations: [
    ProviderListComponent,
    ProviderDetailsComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
