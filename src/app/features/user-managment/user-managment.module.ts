import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { UserManagmentApiService } from './services/api.service';
import { SharedModule } from '@app/shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserManagmentRoutingModule, SharedModule],
  providers: [UserManagmentApiService]
})
export class UserManagmentModule {}
