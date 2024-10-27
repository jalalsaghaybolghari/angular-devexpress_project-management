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
import { MemberListComponent } from '../components/member-list/member-list.component';
import { ModalInput } from '@app/shared/shared.model';
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
  modalInput: ModalInput = new ModalInput();
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

  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

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
    this.modalInput.isVisable = true;
    this.modalInput.title = 'add member to project';
    this.modalInput.component = 'addMember';
    this.modalInput.maxWidth = 400;
  }
  onShowMemberList() {
    this.modalInput.isVisable = true;
    this.modalInput.title = 'project member list';
    this.modalInput.component = 'memberlist';
    this.modalInput.maxWidth = 750;
  }
  loadModalComponent() {
    this.modalContainer.clear();
    if (this.modalInput.component == 'addMember') {
      const componentRef = this.modalContainer.createComponent(AddMemberComponent);
      componentRef.instance.users = this.userList;
      componentRef.instance.projectId = this.selectedProjectId as number;
    } else if (this.modalInput.component == 'memberlist') {
      const componentRef = this.modalContainer.createComponent(MemberListComponent);
      componentRef.instance.projectId = this.selectedProjectId as number;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
