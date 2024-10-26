import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth/guards/auth.guard';
import { NoAuthGuard } from '@app/core/auth/guards/no-auth.guard';
import { LayoutComponent } from '@app/layouts/layout.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard', // Redirect the empty path to 'dashboard'
        pathMatch: 'full' // Make sure it only matches the full empty path
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'project-managment',
        loadChildren: () => import('./project-managment/project-managment.module').then((m) => m.ProjectManagmentModule)
      },
      {
        path: 'task-managment',
        loadChildren: () => import('./task-managment/task-managment.module').then((m) => m.TaskManagmentModule)
      }
    ]
  },
  {
    path: '**', // handle undefined paths
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
