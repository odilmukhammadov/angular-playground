import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipes',
    pathMatch: 'full',
    loadChildren: () => import('./feature-pipe/feature-pipe.module').then((m) => m.FeaturePipeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
