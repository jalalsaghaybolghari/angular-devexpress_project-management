import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from '@core/auth/pages/register/register.component';
import { AuthRoutingModule } from '@core/auth/auth-routing.module';
import { AuthCommonService, AuthApiService } from '@core/auth/services';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './pages/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,
    LoginModule,
    RegisterModule,
    AuthRoutingModule,
  ],
  providers: [AuthCommonService, AuthApiService],
})
export class AuthModule {}
