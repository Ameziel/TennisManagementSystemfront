import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevesComponent } from './eleves/eleves.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormAjoutElevesComponent } from './form-ajout-eleves/form-ajout-eleves.component';

const routes: Routes = [
  {
    path: '',
    component: ElevesComponent,
  },
  {
    path: 'ajout',
    component: FormAjoutElevesComponent,
  }
];

@NgModule({
  declarations: [
    ElevesComponent,
    FormAjoutElevesComponent
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
  ],
})
export class ElevesModule { }
