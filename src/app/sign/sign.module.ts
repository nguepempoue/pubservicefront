import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignRoutingModule } from './sign-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckEmailComponent } from './components/check-email/check-email.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CheckEmailComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignModule { }
