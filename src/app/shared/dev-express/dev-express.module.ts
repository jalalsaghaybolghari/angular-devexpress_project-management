import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxDataGridModule, DxPopupModule, DxButtonModule, DxFormModule, DxScrollViewModule, DxTemplateModule, DxDropDownBoxModule, DxListModule, DxDateBoxModule, DxToolbarModule, DxDrawerModule, DxContextMenuModule, DxTreeViewModule } from 'devextreme-angular';

@NgModule({
  exports: [
    FontAwesomeModule,
    DxDataGridModule,
    DxPopupModule,
    DxButtonModule,
    DxFormModule,
    DxScrollViewModule,
    DxTemplateModule,
    DxDropDownBoxModule,
    DxListModule,
    DxDateBoxModule,
    DxToolbarModule,
    DxDrawerModule,
    DxContextMenuModule,
    DxTreeViewModule,
  ]
})
export class DevExpressModule {}