import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupescoursService} from "../../shared/service/groupescours.service";

@Component({
  selector: 'app-form-ajout-groupecours',
  templateUrl: './form-ajout-groupecours.component.html',
  styleUrls: ['./form-ajout-groupecours.component.css']
})
export class FormAjoutGroupecoursComponent {
  value = 'Clear me';

  ajoutGroupeCoursFormGroup!: FormGroup;

  constructor(private groupeCoursService: GroupescoursService,private formBuilder : FormBuilder) {
  }

  ngOnInit(): void {
    this.ajoutGroupeCoursFormGroup = this.formBuilder.group(
      {
        libelle: this.formBuilder.control(null, [Validators.required]),
        actif: this.formBuilder.control(false, [Validators.required]),

      })
  };

  handleSaveGroupeCours() {

  }
}
