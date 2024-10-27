import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlUtility } from '@app/shared/utils';
import { User, UserInput } from '../user-managment.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentApiService {
  constructor(private http: HttpClient) {}

  getUsers(userInput: UserInput) {
    const url = UrlUtility.getQueryStringParams(`${UrlUtility.serverUrl}/users`, userInput);
    return this.http.get<User[]>(url);
  }
}
