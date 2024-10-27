import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagmentRoutingModule } from './project-managment-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectManagmentApiService } from './services/api.service';
import { ProjectListResolverService } from './services/project-list-resolver.service';
import { SharedModule } from '@app/shared/shared.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { DevExpressModule } from '@shared/dev-express/dev-express.module';
import { MemberListComponent } from './components/member-list/member-list.component';

@NgModule({
  declarations: [ProjectListComponent, AddProjectComponent, AddMemberComponent, MemberListComponent],
  imports: [CommonModule, ProjectManagmentRoutingModule, SharedModule, DevExpressModule],
  providers: [ProjectManagmentApiService, ProjectListResolverService]
})
export class ProjectManagmentModule {}
