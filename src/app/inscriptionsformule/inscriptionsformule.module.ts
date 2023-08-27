import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InscriptionsformuleComponent} from './inscriptionsformule/inscriptionsformule.component';
import {
  FormAjoutInscriptionformuleComponent
} from './form-ajout-inscriptionformule/form-ajout-inscriptionformule.component';
import {RouterModule, Routes} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import { FormEditInscriptionsformuleComponent } from './form-edit-inscriptionsformule/form-edit-inscriptionsformule.component';
import {MatDialogModule} from "@angular/material/dialog";


const routes: Routes = [
  {
    path: '',
    component: InscriptionsformuleComponent,
  },
  {
    path: 'ajout',
    component: FormAjoutInscriptionformuleComponent,
  }
];

@NgModule({
  declarations: [
    InscriptionsformuleComponent,
    FormAjoutInscriptionformuleComponent,
    FormEditInscriptionsformuleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatDialogModule,
  ]
})
export class InscriptionsformuleModule {
}
