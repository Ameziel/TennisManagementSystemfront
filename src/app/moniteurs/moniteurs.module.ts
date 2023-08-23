import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoniteursComponent} from './moniteurs/moniteurs.component';
import {FormAjoutMoniteurComponent} from './form-ajout-moniteur/form-ajout-moniteur.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: MoniteursComponent,
  },
  {
    path: 'ajout',
    component: FormAjoutMoniteurComponent,
  }
];

@NgModule({
  declarations: [
    MoniteursComponent,
    FormAjoutMoniteurComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MoniteursModule { }
