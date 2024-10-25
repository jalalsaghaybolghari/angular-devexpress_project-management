import { Component, Input } from '@angular/core';
import { LoginResult } from '@app/core/auth/auth.model';
import { AuthCommonService } from '@app/core/auth/services';


@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
  userFullName: string;
  @Input()
  menuItems: any;

  @Input()
  menuMode!: string;

  @Input()
  user!: LoginResult | null;

  constructor(private authCommonService: AuthCommonService) {
    const loginResult = authCommonService.getLoginResult() as LoginResult;
    this.userFullName = `${loginResult.firstname} ${loginResult.lastname}`
  }
}

