import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModuleRoutingModule } from './app-module-routing.module';
import { ModulesComponent } from './modules/modules.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    AppModuleRoutingModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModuleModule { }
