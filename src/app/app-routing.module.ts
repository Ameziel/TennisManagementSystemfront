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
  },
  {
    path: 'formulescours',
    loadChildren: () =>
      import('./formulescours/formulescours.module').then((m) => m.FormulescoursModule),
  },
  {
    path: 'inscriptionsformule',
    loadChildren: () =>
      import('./inscriptionsformule/inscriptionsformule.module').then((m) => m.InscriptionsformuleModule),
  },
  {
    path: 'groupescours',
    loadChildren: () =>
      import('./groupescours/groupescours.module').then((m) => m.GroupescoursModule),
  },
  {
    path: 'prestationscours',
    loadChildren: () =>
      import('./prestationscours/prestationscours.module').then((m) => m.PrestationscoursModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
