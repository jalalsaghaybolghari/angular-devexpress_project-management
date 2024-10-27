import { Injectable } from '@angular/core';

import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectManagmentApiService } from './api.service';
import { ProjectResult } from '../project-managment.model';

@Injectable()
export class ProjectListResolverService {
  constructor(private projectManagmentApiService: ProjectManagmentApiService) {}

  resolve(): Observable<unknown> {
    const projectList = this.projectManagmentApiService.getProjects().pipe(map((x) => x));
    
    return forkJoin({ projectList: projectList });
  }
}
