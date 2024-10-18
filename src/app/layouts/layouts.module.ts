import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from '@app/core/auth/auth.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AuthModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutsModule {}
