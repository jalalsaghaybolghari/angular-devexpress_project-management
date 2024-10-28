import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { LoadingPanelDirective } from './directives/loading-panel.directive';
import { DxLoadIndicatorModule, DxLoadPanelModule, DxPopupModule } from 'devextreme-angular';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [LoadingBarComponent, LoadingPanelDirective, ModalComponent],
  imports: [CommonModule, PageNotFoundModule, DxLoadPanelModule, DxLoadIndicatorModule, DxPopupModule],
  exports: [LoadingBarComponent, LoadingPanelDirective, ModalComponent]
})
export class SharedModule {}
