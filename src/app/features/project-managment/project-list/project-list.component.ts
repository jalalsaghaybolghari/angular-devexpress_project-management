import 'devextreme/data/odata/store';
import ArrayStore from 'devextreme/data/array_store';
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectResult } from '../project-managment.model';
import { ProjectManagmentApiService } from '../services/api.service';
import { Subject, take, takeUntil } from 'rxjs';
import { AddMemberComponent } from '../components/add-member/add-member.component';
import { AppStateInterface } from '@app/shared/store/app-state.interface';
import * as UserAction from '@shared/store/users/user.actions';
import * as UserSelector from '@shared/store/users/user.selectors';
import { User, UserInput } from '@app/features/user-managment/user-managment.model';
import { select, Store } from '@ngrx/store';
import { DxFormTypes } from 'devextreme-angular/ui/form';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  dataSource: any;
  priority: any[] | undefined;
  projectList: ProjectResult[] | undefined;
  userList: User[] | undefined;
  loadingData: boolean = false;
  selectedProjectId: number | null = null;
  newMemberModalVisible = false;
  colCountByScreen: DxFormTypes.GroupItem['colCountByScreen'] = {
    xs: 2,
    sm: 2,
    md: 2,
    lg: 2
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectManagmentApiService: ProjectManagmentApiService,
    private store: Store<AppStateInterface>
  ) {}

  @ViewChild('addMemberModalContainer', { read: ViewContainerRef }) addMemberModalContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.store.dispatch(UserAction.getUsers({ userInput: new UserInput() }));
    this.store
      .pipe(select(UserSelector.selectUsers))
      .pipe(takeUntil(this.destroy$))
      .subscribe((users) => {
        this.userList = users;
      });

    this.activatedRoute.data.subscribe((data) => {
      this.projectList = data['projectList'].projectList;
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
  onSelectProject(event: any) {
    this.selectedProjectId = event.selectedRowKeys[0];
  }
  onAddNewProject() {
    this.router.navigate(['/project-managment/add-project']);
  }
  onAddNewTask() {
    this.router.navigate([`/task-managment/add-task/${this.selectedProjectId}`]);
  }
  onAddNewMember() {
    this.newMemberModalVisible = true;
  }
  onShowMemberList() {}

  loadAddMemberContent() {
    this.addMemberModalContainer.clear();
    const componentRef = this.addMemberModalContainer.createComponent(AddMemberComponent);
    componentRef.instance.users = this.userList;
    componentRef.instance.projectId = this.selectedProjectId as number;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
