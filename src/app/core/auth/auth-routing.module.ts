import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@core/auth/pages/login/login.component';
import { RegisterComponent } from '@core/auth/pages/register/register.component';
import { NoAuthGuard } from '@core/auth/guards/no-auth.guard';


const routes: Routes = [
  {
    path: 'login',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    data: { title: 'Login - Project Management' },
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    data: { title: 'Register - Project Management' },
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
