import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-list', // Redirect the empty path to 'dashboard'
    pathMatch: 'full', // Make sure it only matches the full empty path
  },
  {
    path: 'project-list',
    data: { title: 'ProjectList - Project Management' },
    component: ProjectListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectManagmentRoutingModule {}
