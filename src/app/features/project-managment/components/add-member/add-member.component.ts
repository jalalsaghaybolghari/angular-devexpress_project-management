import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoginResult } from '@core/auth/auth.model';
import { AuthCommonService } from '@core/auth/services';
import { User } from '@features/user-managment/user-managment.model';
import { DxFormComponent } from 'devextreme-angular';
import { DxFormTypes } from 'devextreme-angular/ui/form';
import { ProjectMemberInput } from '../../project-managment.model';
import { ProjectManagmentApiService } from '../../services/api.service';
import { catchError, EMPTY, map, take } from 'rxjs';
import { MessageService } from '@shared/services';

@Component({
  selector: 'add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddMemberComponent implements OnInit {
  constructor(
    private authCommonService: AuthCommonService,
    private projectApiService: ProjectManagmentApiService,
    private messageService: MessageService
  ) {}
  @ViewChild(DxFormComponent, { static: true }) form!: DxFormComponent;

  @Input() users: User[] | undefined;
  @Input() projectId: number | undefined;

  dataSource: any | undefined;
  isDropDownBoxOpened = false;
  minDate: Date = new Date();

  selectedUserId: string | null = null;
  selectedFromDate: Date = new Date();
  selectedToDate: string | number | Date = '';

  colCountByScreen: DxFormTypes.GroupItem['colCountByScreen'] = {
    xs: 2,
    sm: 2,
    md: 2,
    lg: 2
  };

  ngOnInit(): void {
    const currentUserId = (this.authCommonService.getLoginResult() as LoginResult).userId;
    this.dataSource = this.users
      ?.filter((user) => user.id != currentUserId)
      .map((user) => ({
        ...user,
        displayName: `${user.firstName} ${user.lastName}`
      }));
    this.selectedUserId = null;
  }

  onAddMember() {
    if (this.form.instance.validate().isValid) {
      const member: ProjectMemberInput = {
        projectId: this.projectId,
        userId: this.selectedUserId,
        fromDate: this.selectedFromDate,
        toDate: this.selectedToDate == '' ? undefined : (this.selectedToDate as Date)
      };
      this.projectApiService
        .addMember(member)
        .pipe(
          take(1),
          map((res) => {
            this.messageService.toastErrorMessage('Registration was done successfully', 'success');
          }),
          catchError((error) => {
            this.messageService.toastErrorMessage(error.error, 'error');
            return EMPTY;
          })
        )
        .subscribe();
    }
  }

  changeDropDownBoxValue(args: { addedItems: User[] }) {
    this.selectedUserId = args.addedItems[0].id as string;
    this.isDropDownBoxOpened = false;
  }
}
