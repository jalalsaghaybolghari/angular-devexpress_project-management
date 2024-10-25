import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './features-routing.module';
import { LayoutsModule } from '@layouts/layouts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatureRoutingModule, LayoutsModule]
})
export class FeaturesModule {}
