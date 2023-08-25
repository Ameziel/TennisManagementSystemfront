import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrestationscoursComponent} from './prestationscours/prestationscours.component';
import {FormAjoutPrestationscoursComponent} from './form-ajout-prestationcours/form-ajout-prestationscours.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";


const routes: Routes = [
  {
    path: '',
    component: PrestationscoursComponent,
  },
  {
    path: 'ajout',
    component: FormAjoutPrestationscoursComponent,
  }
];

@NgModule({
  declarations: [
    PrestationscoursComponent,
    FormAjoutPrestationscoursComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ]
})
export class PrestationscoursModule { }
