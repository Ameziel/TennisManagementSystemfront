import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'eleves',
    loadChildren: () =>
      import('./eleves/eleves.module').then((m) => m.ElevesModule),
  },
  {
    path: 'moniteurs',
    loadChildren: () =>
      import('./moniteurs/moniteurs.module').then((m) => m.MoniteursModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
