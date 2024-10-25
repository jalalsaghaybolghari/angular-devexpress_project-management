import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagmentRoutingModule } from './project-managment-routing.module';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectManagmentApiService } from './services/api.service';
import { ProjectListResolverService } from './services/project-list-resolver.service';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, ProjectManagmentRoutingModule, SharedModule, DxDataGridModule,DxButtonModule],
  providers: [ProjectManagmentApiService, ProjectListResolverService]
})
export class ProjectManagmentModule {}
