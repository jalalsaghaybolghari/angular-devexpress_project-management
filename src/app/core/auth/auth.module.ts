import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RegisterComponent } from '@core/auth/pages/register/register.component';
import { AuthRoutingModule } from '@core/auth/auth-routing.module';
import { AuthCommonService, AuthApiService } from '@core/auth/services';
import { LoginComponent } from '@core/auth/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DxButtonModule, DxFormModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
    HttpClientModule,
    DxFormModule,
    DxButtonModule,
    FontAwesomeModule
  ],
  providers: [AuthCommonService, AuthApiService],
})
export class AuthModule {}
