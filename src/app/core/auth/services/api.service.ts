import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInput, LoginResult, RegisterInput } from '@core/auth/auth.model';
import { UrlUtility } from '@shared/utils';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  login(loginInput: LoginInput) {
    return this.http.post<LoginResult>(
      `${UrlUtility.serverUrl}/login`,
      loginInput
    );
  }
  register(registerInput: RegisterInput) {
    return this.http.post<unknown>(
      `${UrlUtility.serverUrl}/register`,
      registerInput
    );
  }
  logout() {
    return this.http.post<unknown>(`${UrlUtility.serverUrl}/logout`, null);
  }
}
