import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
