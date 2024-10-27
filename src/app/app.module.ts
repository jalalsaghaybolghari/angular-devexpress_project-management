import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AuthModule } from '@core/auth/auth.module';
import { SharedModule } from '@shared/shared.module';
import { FeaturesModule } from '@features/features.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from '@layouts/layouts.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthApiInterceptor } from '@core/auth/interceptors/api.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from '@shared/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    LayoutsModule,
    FeaturesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
