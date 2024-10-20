import { TestBed } from '@angular/core/testing';
import { AuthApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginInput, LoginResult, RegisterInput } from '../auth.model';
import { UrlUtility } from '../../../shared/utils';

describe('AuthApiService', () => {
  let authApiService: AuthApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthApiService]
    });

    authApiService = TestBed.inject(AuthApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('created authApiService', () => {
    expect(authApiService).toBeTruthy();
  });

  describe('login', () => {
    it('should return loginResult', () => {
      const sampleLoginResult = {
        username: 'validUser',
        firstname: 'jack',
        lastname: 'rabinson',
        mobile: '67762000000',
        userId: '1',
        token: 'tokentokentokentokentoken'
      } as LoginResult;

      let loginResult: LoginResult | undefined;

      const loginInput: LoginInput = {username:"jack1992", password:"Jack/1992"}
      authApiService.login(loginInput).subscribe((response) => {
        loginResult = response;
      });

      const req = httpTestingController.expectOne(`${UrlUtility.serverUrl}/login`);
      req.flush(sampleLoginResult); //simulate a successful server reply

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(loginInput);

      expect(loginResult).toEqual(sampleLoginResult);
    });
  });

  describe('register', () => {
    it('should return null', () => {

      let registerResult: null | undefined;

      const registerInput: RegisterInput = new RegisterInput();
      authApiService.register(registerInput).subscribe((response) => {
        registerResult = response;
      });

      const req = httpTestingController.expectOne(`${UrlUtility.serverUrl}/register`);
      req.flush(null); 

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(registerInput);

      expect(registerResult).toEqual(null);
    });
  });
});
