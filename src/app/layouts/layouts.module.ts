import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule, DxContextMenuModule, DxDrawerModule, DxListModule, DxScrollViewModule, DxToolbarModule, DxTreeViewModule } from 'devextreme-angular';
import { AuthModule } from '@core/auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { LayoutService } from './layout.service';
import { LayoutComponent } from './layout.component';
import { SideNavigationMenuComponent } from './components/side-navigation-menu/side-navigation-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, UserPanelComponent, SideNavigationMenuComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    AuthModule,
    DxButtonModule,
    DxToolbarModule,
    DxListModule,
    DxContextMenuModule,
    DxScrollViewModule,
    DxDrawerModule,
    DxTreeViewModule,
    FontAwesomeModule,
    SharedModule
    
  ],
  providers:[LayoutService],
  exports: [LayoutComponent]
})
export class LayoutsModule {}
