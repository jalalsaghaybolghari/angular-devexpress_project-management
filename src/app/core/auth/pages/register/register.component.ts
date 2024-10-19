import { Component, NgModule, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegisterInput } from '@core/auth/auth.model';
import { AuthApiService } from '@core/auth/services';
import { MessageService } from '@shared/services';
import { RegexUtility } from '@shared/utils/regex.utility';
import { catchError, EMPTY, map, take } from 'rxjs';
import { DxFormComponent, DxFormModule, DxFormTypes } from 'devextreme-angular/ui/form';
import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';
import Validator from 'devextreme/ui/validator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxButtonModule } from 'devextreme-angular';

type EditorOptions = DxTextBoxTypes.Properties;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private authApiService: AuthApiService,
    private messageService: MessageService,
    private router: Router
  ) {}
  @ViewChild(DxFormComponent, { static: true }) form!: DxFormComponent;
  phoneRegex = RegexUtility.phoneRegex;
  passwordRegex = RegexUtility.passwordRegex;
  onRegisterFormSubmit(e: any) {
    e.preventDefault();
    if (this.form.instance.validate().isValid) {
      const registerInput = new RegisterInput();
      registerInput.username = this.form.instance
        .getEditor('username')
        ?.option('value') as string;

      registerInput.firstName = this.form.instance
        .getEditor('firstname')
        ?.option('value') as string;

      registerInput.lastName = this.form.instance
        .getEditor('lastname')
        ?.option('value') as string;

      registerInput.mobile = this.form.instance
        .getEditor('phonenumber')
        ?.option('value') as string;

      registerInput.email = this.form.instance
        .getEditor('email')
        ?.option('value') as string;

      registerInput.password = this.form.instance
        .getEditor('password')
        ?.option('value') as string;

      this.authApiService
        .register(registerInput)
        .pipe(
          take(1),
          map((res) => {
            this.messageService.toastErrorMessage(
              'Registration was successful',
              'success'
            );
            this.router.navigate(['/login']);
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

  emailEditorOptions: EditorOptions = {
    mode: 'email',
    valueChangeEvent: 'keyup',
  };
  phoneEditorOptions: EditorOptions = {
    mask: '+43 (X00) 000-000-00',
    maskRules: {
      X: /[6]/,
    },
    maskInvalidMessage: 'The phone must have a correct Austria phone format',
    valueChangeEvent: 'keyup',
  };

  passwordComparison = () => this.form.instance.option('formData').password;
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
    onValueChanged: () => {
      let editor = this.form.instance.getEditor('confirmpassword');
      if (editor?.option('value')) {
        let instance = Validator.getInstance(editor.element()) as Validator;
        instance.validate();
      }
    },
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
  confirmPasswordEditorOptions: EditorOptions = {
    mode: 'password',
    valueChangeEvent: 'keyup',
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          icon: 'fa-regular fa-eye',
          stylingMode: 'text',
          onClick: () => this.changePasswordMode('confirmpassword'),
        },
      },
    ],
  };
}

@NgModule({
  imports: [FontAwesomeModule, DxFormModule, DxButtonModule, RouterLink],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
})
export class RegisterModule {}