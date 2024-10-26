import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagmentRoutingModule } from './task-managment-routing.module';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { SharedModule } from '@app/shared/shared.module';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [TaskListComponent, AddTaskComponent],
  imports: [CommonModule, TaskManagmentRoutingModule, SharedModule, DxDataGridModule, DxButtonModule],
  providers: []
})
export class TaskManagmentModule {}
