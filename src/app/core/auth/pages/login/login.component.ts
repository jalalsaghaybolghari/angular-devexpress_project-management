import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginInput } from '../../auth.model';
import { AuthApiService, AuthCommonService } from '../../services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageService } from '../../../../shared/services';
import { DxButtonModule } from 'devextreme-angular';
import {
  DxFormComponent,
  DxFormModule,
  DxFormTypes,
} from 'devextreme-angular/ui/form';
import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';
import { catchError, EMPTY, map, take } from 'rxjs';

type EditorOptions = DxTextBoxTypes.Properties;

@Component({
  selector: 'app-loign',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private authApiService: AuthApiService,
    private authCommonService: AuthCommonService,
    private messageService: MessageService,
    private router: Router
  ) {}
  @ViewChild(DxFormComponent, { static: true })
  form!: DxFormComponent;

  onLoginFormSubmit(e: any) {
    e.preventDefault();
    if (this.form.instance.validate().isValid) {
      const loginInput = new LoginInput();
      loginInput.username = this.form.instance
        .getEditor('username')
        ?.option('value') as string;
      loginInput.password = this.form.instance
        .getEditor('password')
        ?.option('value') as string;

      this.authApiService
        .login(loginInput)
        .pipe(
          take(1),
          map((res) => {
            this.authCommonService.setLoginResult(res);
            this.router.navigate(['/']);
          }),
          catchError((error) => {
            this.messageService.toastErrorMessage(error.error, 'error');
            return EMPTY;
          })
        )
        .subscribe();
    }
  }

  colCountByScreen: DxFormTypes.GroupItem['colCountByScreen'] = {
    xs: 2,
    sm: 2,
    md: 2,
    lg: 2,
  };
  onRegisterButtonClick() {
      this.router.navigate(['/register']);
  }
  changePasswordMode = (name: string) => {
    let editor = this.form.instance.getEditor(name);
    editor?.option(
      'mode',
      editor.option('mode') === 'text' ? 'password' : 'text'
    );
  };
  passwordEditorOptions: EditorOptions = {
    mode: 'password',
    valueChangeEvent: 'keyup',
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          stylingMode: 'text',
          icon: 'fa-regular fa-eye',
          onClick: () => this.changePasswordMode('password'),
        },
      },
    ],
  };
}

@NgModule({
  imports: [FontAwesomeModule, DxFormModule, DxButtonModule, RouterLink],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})
export class LoginModule {}
