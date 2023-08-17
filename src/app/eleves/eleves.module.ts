import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevesComponent } from './eleves/eleves.component';
import { Routes, RouterModule } from '@angular/router';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

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
    MatNativeDateModule
  ]
})
export class ElevesModule { }
