import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {Moniteur} from "../../shared/models/moniteur.model";
import {
  INVALID_EMAIL_PATTERN,
  INVALID_NAME_PATTERN, INVALID_PHONENUMBER_PATTERN,
  REQUIRED_FIELD_MESSAGE
} from "../../shared/constants/forms-messages";
import {NAME_REGEX} from "../../shared/constants/regexs";

@Component({
  selector: 'app-form-ajout-moniteur',
  templateUrl: './form-ajout-moniteur.component.html',
  styleUrls: ['./form-ajout-moniteur.component.css']
})
export class FormAjoutMoniteurComponent {

  ajoutMoniteurFormGroup! : FormGroup;
  err_message_required = REQUIRED_FIELD_MESSAGE;
  err_message_name_pattern= INVALID_NAME_PATTERN;
  err_message_email_pattern = INVALID_EMAIL_PATTERN;
  err_message_phoneNumber_pattern = INVALID_PHONENUMBER_PATTERN;

  constructor(private moniteurService : MoniteursService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ajoutMoniteurFormGroup = this.formBuilder.group(
      {
        prenom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        nom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        email: this.formBuilder.control(null, [Validators.required,Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        telephone: this.formBuilder.control(null, [Validators.required,Validators.pattern("^[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]),
        qualification: this.formBuilder.control("AUCUN",[Validators.required]),
        actif: this.formBuilder.control(false),
      })
  };

  handleSaveMoniteur() {
    let moniteur:Moniteur = this.ajoutMoniteurFormGroup.value;
    this.moniteurService.saveMoniteur(moniteur).subscribe(
      {
        next : data => {
          alert("Le moniteur a bien été ajouté à l'application !");
          this.ajoutMoniteurFormGroup.reset();
        },
        error : err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
