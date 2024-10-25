import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlUtility } from '@shared/utils';
import { AuthCommonService } from '../services';
import { LoginResult } from '../auth.model';

@Injectable()
export class AuthApiInterceptor implements HttpInterceptor {
  constructor(private authCommonService: AuthCommonService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginResult = this.authCommonService.getLoginResult() as LoginResult;
    const nonAuthUrls = [`${UrlUtility.serverUrl}/register`, `${UrlUtility.serverUrl}/login`];

    if (!nonAuthUrls.includes(request.url)) {
      let reqWithToken = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loginResult.token}`
        }
      });
      return next.handle(reqWithToken);
    }

    return next.handle(request);
  }
}
