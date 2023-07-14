import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturePipeRoutingModule } from './feature-pipe-routing.module';
import { FeaturePipeComponent } from './feature-pipe.component';

import { TruncateStandalonePipe } from '../standalone/pipes/truncate-standalone.pipe';

@NgModule({
  declarations: [FeaturePipeComponent],
  imports: [CommonModule, FeaturePipeRoutingModule, SharedModule, TruncateStandalonePipe],
})
export class FeaturePipeModule {}
