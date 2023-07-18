import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturePipeComponent } from './feature-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturePipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturePipeRoutingModule {}
