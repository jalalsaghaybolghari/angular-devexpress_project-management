import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { DxFormTypes } from 'devextreme-angular/ui/form';
import { catchError, EMPTY, map, take } from 'rxjs';
import { MessageService } from '@shared/services';
import { ProjectManagmentApiService } from '../services/api.service';
import { Project } from '../project-managment.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent implements OnInit {
  constructor(
    private projectApiService: ProjectManagmentApiService,
    private messageService: MessageService
  ) {}
  @ViewChild(DxFormComponent, { static: true }) form!: DxFormComponent;

  selectedFromDate: Date = new Date();
  selectedDueDate: string | number | Date = '';

  colCountByScreen: DxFormTypes.GroupItem['colCountByScreen'] = {
    xs: 2,
    sm: 2,
    md: 2,
    lg: 2
  };

  ngOnInit(): void {}

  onAddProject(event: any) {
    event.preventDefault();
    if (this.form.instance.validate().isValid) {
      const project: Project = {
        title: this.form.instance.getEditor('title')?.option('value') as string,
        description: this.form.instance.getEditor('description')?.option('value') as string,
        startDate: this.selectedFromDate,
        endDate: this.selectedDueDate == '' ? undefined : (this.selectedDueDate as Date)
      };
      this.projectApiService
        .addProject(project)
        .pipe(
          take(1),
          map((res) => {
            this.form.instance.clear();
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
}
