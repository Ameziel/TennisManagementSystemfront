import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Eleve } from 'src/app/shared/models/eleve.model';

@Component({
  selector: 'app-form-ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css'],
  providers: [
  ],
})
export class FormAjoutComponent {
  maxDate: Date = new Date();

  onSubmit(eleveForm: NgForm) {
    const formData: Eleve = eleveForm.value;
    console.log(formData);
  }

  // reflechir à comment utiliser le service ;) 
}
