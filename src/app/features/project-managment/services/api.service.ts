import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlUtility } from '@app/shared/utils';
import { Project, ProjectMemberInput, ProjectMembersResult, ProjectResult } from '../project-managment.model';

@Injectable()
export class ProjectManagmentApiService {
  constructor(private http: HttpClient) {}

  addProject(project: Project) {
    return this.http.post<Project>(`${UrlUtility.serverUrl}/projects`, project);
  }
  getProjects() {
    return this.http.get<ProjectResult[]>(`${UrlUtility.serverUrl}/projects`);
  }
  deleteProject(id: string) {
    return this.http.delete<Project>(`${UrlUtility.serverUrl}/projects/${id}`);
  }
  addMember(member: ProjectMemberInput) {
    return this.http.post<any>(`${UrlUtility.serverUrl}/projects/members`, member);
  }
  getProjectMembers(id: number) {
    return this.http.get<ProjectMembersResult[]>(`${UrlUtility.serverUrl}/projects/${id}/members`);
  }
}
