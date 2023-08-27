import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormulescoursComponent} from './formulescours/formulescours.component';
import {FormAjoutFormulecoursComponent} from './form-ajout-formulecours/form-ajout-formulecours.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import { FormEditFormulecoursComponent } from './form-edit-formulecours/form-edit-formulecours.component';
import {MatDialogModule} from "@angular/material/dialog";


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
    FormAjoutFormulecoursComponent,
    FormEditFormulecoursComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatDialogModule,
  ]
})
export class FormulescoursModule { }
