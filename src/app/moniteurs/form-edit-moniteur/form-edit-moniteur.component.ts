import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {Moniteur} from "../../shared/models/moniteur.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Eleve} from "../../shared/models/eleve.model";
import {
  INVALID_EMAIL_PATTERN,
  INVALID_NAME_PATTERN, INVALID_PHONENUMBER_PATTERN,
  REQUIRED_FIELD_MESSAGE
} from "../../shared/constants/forms-messages";
import {NAME_REGEX} from "../../shared/constants/regexs";

@Component({
  selector: 'app-form-edit-moniteur',
  templateUrl: './form-edit-moniteur.component.html',
  styleUrls: ['./form-edit-moniteur.component.css']
})
export class FormEditMoniteurComponent {
  editMoniteurFormGroup! : FormGroup;
  err_message_required = REQUIRED_FIELD_MESSAGE;
  err_message_name_pattern= INVALID_NAME_PATTERN;
  err_message_email_pattern = INVALID_EMAIL_PATTERN;
  err_message_phoneNumber_pattern = INVALID_PHONENUMBER_PATTERN;

  constructor(private moniteurService : MoniteursService,private formBuilder : FormBuilder, @Inject(MAT_DIALOG_DATA) private data: Eleve, private dialogRef: MatDialogRef<FormEditMoniteurComponent>) { }

  ngOnInit(): void {
    this.editMoniteurFormGroup = this.formBuilder.group(
      {
        id: this.formBuilder.control(null, [Validators.required]),
        prenom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        nom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        email: this.formBuilder.control(null, [Validators.required,Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        telephone: this.formBuilder.control(null, [Validators.required]),
        qualification: this.formBuilder.control("AUCUN",[Validators.required]),
        actif: this.formBuilder.control(false),
      })
    this.editMoniteurFormGroup.setValue(this.data);
  };

  handleEditMoniteur() {
    let moniteur:Moniteur = this.editMoniteurFormGroup.value;
    this.moniteurService.updateMoniteur(moniteur).subscribe(
      {
        next : data => {
          alert("Le moniteur a bien été ajouté !");
          this.editMoniteurFormGroup.reset();
          this.dialogRef.close();
        },
        error : err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
