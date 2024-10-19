import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { LoginResult } from '@app/core/auth/auth.model';
import { AuthApiService, AuthCommonService } from '@app/core/auth/services';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: LoginResult | null = null;

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['/profile']);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.authApiService.logout();
    }
  }];

  constructor(private authService: AuthCommonService,private authApiService: AuthApiService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getLoginResult();
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}

