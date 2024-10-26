import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListResolverService } from './services/project-list-resolver.service';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-list', // Redirect the empty path to 'dashboard'
    pathMatch: 'full' // Make sure it only matches the full empty path
  },
  {
    path: 'project-list',
    data: { title: 'ProjectList - Project Management' },
    resolve: {
      projectList: ProjectListResolverService
    },
    component: ProjectListComponent
  },
  {
    path: 'add-project',
    data: { title: 'Add Project - Project Management' },
    component: AddProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagmentRoutingModule {}
