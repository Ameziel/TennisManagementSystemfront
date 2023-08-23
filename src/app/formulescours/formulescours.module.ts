import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormulescoursComponent} from './formulescours/formulescours.component';
import {FormAjoutFormulecoursComponent} from './form-ajout-formulecours/form-ajout-formulecours.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


const routes: Routes = [
  {
    path: '',
    component: FormulescoursComponent,
  },
  {
    path: 'ajout',
    component: FormAjoutFormulecoursComponent,
  }
];
@NgModule({
  declarations: [
    FormulescoursComponent,
    FormAjoutFormulecoursComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
  ]
})
export class FormulescoursModule { }
