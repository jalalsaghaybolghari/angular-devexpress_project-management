import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagmentRoutingModule } from './project-managment-routing.module';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxListModule,
  DxPopupModule,
  DxScrollViewModule,
  DxTemplateModule
} from 'devextreme-angular';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectManagmentApiService } from './services/api.service';
import { ProjectListResolverService } from './services/project-list-resolver.service';
import { SharedModule } from '@app/shared/shared.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProjectListComponent, AddProjectComponent, AddMemberComponent],
  imports: [
    CommonModule,
    ProjectManagmentRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxPopupModule,
    DxButtonModule,
    FontAwesomeModule,
    DxFormModule,
    DxScrollViewModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxListModule,
    DxDateBoxModule
  ],
  providers: [ProjectManagmentApiService, ProjectListResolverService]
})
export class ProjectManagmentModule {}
