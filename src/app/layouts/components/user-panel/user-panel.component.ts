import { Component, Input } from '@angular/core';
import { LoginResult } from '@app/core/auth/auth.model';


@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode!: string;

  @Input()
  user!: LoginResult | null;

  constructor() {}
}

