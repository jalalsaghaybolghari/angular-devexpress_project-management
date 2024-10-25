import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { LoadingPanelDirective } from './directives/loading-panel.directive';
import { DxLoadIndicatorModule, DxLoadPanelModule } from 'devextreme-angular';

@NgModule({
  declarations: [LoadingBarComponent, LoadingPanelDirective],
  imports: [CommonModule, PageNotFoundModule, DxLoadPanelModule, DxLoadIndicatorModule],
  exports:[LoadingBarComponent, LoadingPanelDirective]
})
export class SharedModule {}
