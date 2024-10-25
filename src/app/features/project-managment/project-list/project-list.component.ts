import 'devextreme/data/odata/store';
import ArrayStore from 'devextreme/data/array_store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectResult } from '../project-managment.model';
import { ProjectManagmentApiService } from '../services/api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
  dataSource: any;
  priority: any[] | undefined;
  projectList: ProjectResult[] | undefined;
  loadingData: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private projectManagmentApiService: ProjectManagmentApiService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.projectList = data['projectList'];
    });
    const employeesStore = new ArrayStore({
      data: this.projectList,
      key: 'id'
    });
    this.dataSource = {
      store: employeesStore,
      expand: 'ResponsibleEmployee',
      select: ['id', 'title', 'description', 'startDate', 'endDate']
    };

    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }
  refreshProjects() {
    this.loadingData = true;
    this.projectManagmentApiService
      .getProjects()
      .pipe(take(1))
      .subscribe({
        complete: () => {
          this.loadingData = false;
        }
      });
  }
}
