import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResult } from '@core/auth/auth.model';
import { LocalStorageService } from '../../../shared/services';

@Injectable()
export class AuthCommonService {
  private loginResultSubject: BehaviorSubject<LoginResult | null> = new BehaviorSubject<LoginResult| null>(null);
  public loginResult$: Observable<LoginResult| null> = this.loginResultSubject.asObservable();

  constructor(private localStorageService: LocalStorageService) {
    const loginResult = this.localStorageService.getItem('loginResult');
    if (loginResult) this.setLoginResult(loginResult);
  }

  getLoginResult() : LoginResult | null {
    const value = localStorage.getItem('loginResult');
    return value ? JSON.parse(value) : null;
  }
  setLoginResult(value: LoginResult) {
    if (isPlatformBrowser(this.localStorageService.platformId)) {
      this.loginResultSubject.next(value);
      this.localStorageService.setItem('loginResult', value);
    }
  }
  removeLoginResult() {
    if (isPlatformBrowser(this.localStorageService.platformId)) {
      this.loginResultSubject.next(null);
      this.localStorageService.removeItem('loginResult');
    }
  }
}
