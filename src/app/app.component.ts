import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { MessageService } from '@shared/services';
import config from 'devextreme/core/config';
import { filter, Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

config({
  licenseKey:
    'JwgEYmrfyDWJEeBjYa5ounXueOvR6KWv8GusSnXvE5fcldb+P+CEqWTf3BDHIdVVRJ/5ZWnwWyVdL4P4z7Qtpsb20o3kHjqArEMbS4EvwZIVUICwVaMXGmpFUEhRxOk8Bem1Ug==AAAAAAAAAAAAAAAAAAAAAAAAAAAyNDEsOTIyMzM3MjAzNjg1NDc3NTgwNyw5MjIzMzcyMDM2ODU0Nzc1ODA3LERlbHRhRm9YLDg3NDM5MzAzMSwyLDg4ODUxMjU1Ng==',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Project Management';
  defaultToastTimeOut: number = 3000;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private _titleService: Title,
    private _toastrService: ToastrService,
    private _messageService: MessageService
  ) {
    this.configAppToastMessage();
  }
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const currentRoute = this.router.routerState.root.firstChild; // Memoization
        const pageTitle = currentRoute?.snapshot.data['title'];
        if (pageTitle) {
          this._titleService.setTitle(pageTitle);
        }
      });
  }

  private configAppToastMessage() {
    this._messageService.toastMessage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((toastMessage) => {
        if (
          toastMessage != null &&
          toastMessage.message != null &&
          toastMessage.message.length !== 0
        ) {
          if (toastMessage.messageType == 'error') {
            this._toastrService.error(`${toastMessage.message}`, undefined, {
              timeOut: toastMessage.timeOut ?? this.defaultToastTimeOut,
              progressBar: true,
            });
          } else if (toastMessage.messageType == 'success') {
            this._toastrService.success(`${toastMessage.message}`, undefined, {
              timeOut: toastMessage.timeOut ?? this.defaultToastTimeOut,
              progressBar: true,
            });
          } else {
            this._toastrService.info(`${toastMessage.message}`, undefined, {
              timeOut: toastMessage.timeOut ?? this.defaultToastTimeOut,
              progressBar: true,
            });
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
