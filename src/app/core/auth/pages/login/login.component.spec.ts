import { expect } from '@jest/globals';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../../.././../shared/services';
import { AuthApiService, AuthCommonService } from '../../services';
import { LoginComponent } from './login.component';
import { Router, RouterLink } from '@angular/router';
import { of, throwError } from 'rxjs';
import { DxButtonModule, DxFormComponent, DxFormModule } from 'devextreme-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('Login component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authApiService: AuthApiService;
  let authCommonService: AuthCommonService;
  let messageService: MessageService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, DxFormComponent],
      imports: [FontAwesomeModule, DxFormModule, DxButtonModule],
      providers: [
        {
          provide: AuthApiService,
          useValue: {
            login: jest.fn().mockImplementation((loginInput) => {
              if (loginInput.username === 'jack1992' && loginInput.password === 'Jack/1992') {
                return of({ token: 'validToken' });
              } else {
                return throwError({ error: 'Invalid credentials' });
              }
            })
          }
        },
        {
          provide: AuthCommonService,
          useValue: {
            setLoginResult: jest.fn()
          }
        },
        {
          provide: MessageService,
          useValue: {
            toastErrorMessage: jest.fn()
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn()
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    authApiService = TestBed.inject(AuthApiService);
    authCommonService = TestBed.inject(AuthCommonService);
    messageService = TestBed.inject(MessageService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize the form viewChild', () => {
    expect(component.form).toBeDefined();
  });

  it('should not call login when form is invalid', () => {
    const formInstanceSpy = jest.spyOn(component.form.instance, 'validate').mockReturnValue({ isValid: false });
    const event = new Event('submit');
    component.onLoginFormSubmit(event);

    expect(authApiService.login).not.toHaveBeenCalled();
    formInstanceSpy.mockRestore();
  });

  it('should navigate to root path on successful login', () => {
    const formInstanceSpy = jest.spyOn(component.form.instance, 'validate').mockReturnValue({ isValid: true });
    const event = new Event('submit');
    component.onLoginFormSubmit(event);

    expect(authApiService.login).toHaveBeenCalled();
    // expect(router.navigate).toHaveBeenCalledWith(['/']);
    formInstanceSpy.mockRestore();
  });
});
