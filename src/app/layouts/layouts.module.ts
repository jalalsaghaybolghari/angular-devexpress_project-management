import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from '@core/auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { LayoutService } from './layout.service';
import { LayoutComponent } from './layout.component';
import { SideNavigationMenuComponent } from './components/side-navigation-menu/side-navigation-menu.component';
import { SharedModule } from '@shared/shared.module';
import { DevExpressModule } from '@app/shared/dev-express/dev-express.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, UserPanelComponent, SideNavigationMenuComponent],
  imports: [CommonModule, RouterOutlet, AuthModule, DevExpressModule, SharedModule],
  providers: [LayoutService],
  exports: [LayoutComponent]
})
export class LayoutsModule {}
