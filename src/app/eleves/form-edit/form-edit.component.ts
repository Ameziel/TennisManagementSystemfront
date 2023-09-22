import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Eleve} from 'src/app/shared/models/eleve.model';
import {ElevesService} from "../../shared/service/eleves.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {
  INVALID_EMAIL_PATTERN,
  INVALID_NAME_PATTERN, INVALID_PHONENUMBER_PATTERN,
  REQUIRED_FIELD_MESSAGE
} from "../../shared/constants/forms-messages";
import {NAME_REGEX} from "../../shared/constants/regexs";

@Component({
  selector: 'app-form-ajout',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css'],
  providers: [],
})
export class FormEditComponent implements OnInit {
  maxDate: Date = new Date();
  editEleveFormGroup!: FormGroup;
  err_message_required = REQUIRED_FIELD_MESSAGE;
  err_message_name_pattern= INVALID_NAME_PATTERN;
  err_message_email_pattern = INVALID_EMAIL_PATTERN;
  err_message_phoneNumber_pattern = INVALID_PHONENUMBER_PATTERN;

  constructor(private eleveService: ElevesService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: Eleve,
              private dialogRef: MatDialogRef<FormEditComponent>) {
  }

  ngOnInit(): void {
    this.editEleveFormGroup = this.formBuilder.group(
      {
        id: this.formBuilder.control(null, [Validators.required]),
        prenom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        nom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        genre: this.formBuilder.control(null),
        email: this.formBuilder.control(null, [Validators.required,Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        telephone: this.formBuilder.control(null, [Validators.required]),
        dateDeNaissance: this.formBuilder.control([Validators.required]),
        details: this.formBuilder.control(null),
        actif: this.formBuilder.control(false),
      })
    this.editEleveFormGroup.setValue(this.data);
  };

  handleEditEleve() {
    let eleve: Eleve = this.editEleveFormGroup.value;
    this.eleveService.updateEleve(eleve).subscribe(
      {
        next: data => {
          alert("L'eleve a bien été ajouté à l'application !");
          this.dialogRef.close();
        },
        error: err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }

  //template driven
  // onSubmit(eleveForm: NgForm) {
  //   const formData: Eleve = eleveForm.value;
  //   console.log(formData);
  // }
}
