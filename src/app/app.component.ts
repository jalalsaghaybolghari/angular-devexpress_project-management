import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
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
