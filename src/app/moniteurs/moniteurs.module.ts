import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoniteursComponent } from './moniteurs/moniteurs.component';
import { FormAjoutMoniteurComponent } from './form-ajout-moniteur/form-ajout-moniteur.component';



@NgModule({
  declarations: [
    MoniteursComponent,
    FormAjoutMoniteurComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoniteursModule { }
