import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-list',
    pathMatch: 'full' 
  },
  {
    path: 'task-list',
    data: { title: 'Task List - Project Management' },
    component: TaskListComponent
  },
  {
    path: 'add-task/:projectId',
    data: { title: 'Add Task - Project Management' },
    component: AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagmentRoutingModule {}
