import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { ProjectManagmentApiService } from '../../services/api.service';
import { ProjectMembersResult } from '../../project-managment.model';
import { take } from 'rxjs';
import ArrayStore from 'devextreme/data/array_store';
export interface DialogData {
  projectId: number;
}

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent implements OnInit {
  @Input() projectId: number | undefined;
  public membersData!: ProjectMembersResult[];
  dataSource: any;
  priority: any[] | undefined;



  constructor(private projectManagmentApiService: ProjectManagmentApiService) {}
  ngOnInit(): void {
    this.loadInitData();
  }
  loadInitData() {
    this.projectManagmentApiService
      .getProjectMembers(this.projectId as number)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.membersData = res;
          const employeesStore = new ArrayStore({
            data: this.membersData,
            key: 'id'
          });
          this.dataSource = {
            store: employeesStore,
            expand: 'ResponsibleEmployee',
            select: ['id', 'userName', 'projectRole', 'fromDate', 'toDate']
          };
        },
        error: (err) => console.error('Observable emitted an error: ' + err),
      });
    


      this.priority = [
        { name: 'High', value: 4 },
        { name: 'Urgent', value: 3 },
        { name: 'Normal', value: 2 },
        { name: 'Low', value: 1 }
      ];
  }
}
