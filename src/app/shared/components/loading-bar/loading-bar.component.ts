import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingBarComponent implements AfterViewInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  @ViewChild('bar') bar!: ElementRef;

  get element(): HTMLElement {
    return this.bar.nativeElement;
  }

  constructor(private router: Router, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.element.classList.remove('loading-bar--start', 'loading-bar--complete', 'loading-bar--reset');
          this.element.getBoundingClientRect(); // force reflow
          this.element.classList.add('loading-bar--start');
        }

        if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
          if (this.element.classList.contains('loading-bar--start')) {
            this.element.classList.remove('loading-bar--start');
            this.element.classList.add('loading-bar--complete');
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
