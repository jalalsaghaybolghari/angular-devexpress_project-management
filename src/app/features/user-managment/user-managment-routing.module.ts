import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list', // Redirect the empty path to 'dashboard'
    pathMatch: 'full' // Make sure it only matches the full empty path
  },
  {
    path: 'user-list',
    data: { title: 'User List - Project Management' },
    component: UserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagmentRoutingModule {}
