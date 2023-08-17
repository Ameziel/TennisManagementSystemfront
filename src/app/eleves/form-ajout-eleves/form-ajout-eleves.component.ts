import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Eleve } from 'src/app/shared/models/eleve.model';

@Component({
  selector: 'app-form-ajout-eleves',
  templateUrl: './form-ajout-eleves.component.html',
  styleUrls: ['./form-ajout-eleves.component.css']
})
export class FormAjoutElevesComponent {
  maxDate: Date = new Date();

  onSubmit(eleveForm: NgForm) {
    const formData: Eleve = eleveForm.value;
    console.log(formData);
  }

  // reflechir à comment utiliser le service ;) 

}
