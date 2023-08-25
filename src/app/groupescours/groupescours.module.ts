import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupescoursComponent} from './groupescours/groupescours.component';
import {FormAjoutGroupecoursComponent} from './form-ajout-groupecours/form-ajout-groupecours.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


const routes: Routes = [
  {
    path: '',
    component: GroupescoursComponent,
  },
  {
    path: 'ajout',
    component: FormAjoutGroupecoursComponent,
  }
];
@NgModule({
  declarations: [
    GroupescoursComponent,
    FormAjoutGroupecoursComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ]
})
export class GroupescoursModule { }
