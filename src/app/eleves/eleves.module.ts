import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevesComponent } from './eleves/eleves.component';
import { Routes, RouterModule } from '@angular/router';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: ElevesComponent,
  },
  {
    path: 'ajout',
    component: FormAjoutComponent,
  }
];

@NgModule({
  declarations: [
    ElevesComponent,
    FormAjoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class ElevesModule { }
