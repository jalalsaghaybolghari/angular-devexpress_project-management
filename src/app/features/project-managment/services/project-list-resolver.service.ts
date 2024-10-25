import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectManagmentApiService } from './api.service';
import { ProjectResult } from '../project-managment.model';

@Injectable()
export class ProjectListResolverService  {
  constructor(private projectManagmentApiService: ProjectManagmentApiService) {}

  resolve(): Observable<ProjectResult[]> {
    return this.projectManagmentApiService.getProjects().pipe(map((x) => x));
  }
}


