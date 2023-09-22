import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Eleve} from 'src/app/shared/models/eleve.model';
import {ElevesService} from "../../shared/service/eleves.service";
import {
  INVALID_EMAIL_PATTERN,
  INVALID_NAME_PATTERN, INVALID_PHONENUMBER_PATTERN,
  REQUIRED_FIELD_MESSAGE
} from "../../shared/constants/forms-messages";
import {NAME_REGEX} from "../../shared/constants/regexs";

@Component({
  selector: 'app-form-ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css'],
  providers: [
  ],
})
export class FormAjoutComponent {
  maxDate: Date = new Date();
  ajoutEleveFormGroup! : FormGroup;
  err_message_required = REQUIRED_FIELD_MESSAGE;
  err_message_name_pattern= INVALID_NAME_PATTERN;
  err_message_email_pattern = INVALID_EMAIL_PATTERN;
  err_message_phoneNumber_pattern = INVALID_PHONENUMBER_PATTERN;

  constructor(private eleveService : ElevesService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ajoutEleveFormGroup = this.formBuilder.group(
      {
        prenom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        nom: this.formBuilder.control(null, [Validators.required, Validators.pattern(NAME_REGEX)]),
        genre: this.formBuilder.control(null),
        email: this.formBuilder.control(null, [Validators.required,Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        telephone: this.formBuilder.control(null, [Validators.required,Validators.pattern("^[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]),
        dateDeNaissance: this.formBuilder.control([Validators.required]),
        details: this.formBuilder.control(null),
        actif: this.formBuilder.control(false),
      })
  };

  handleSaveEleve() {
    let eleve:Eleve = this.ajoutEleveFormGroup.value;
    this.eleveService.saveEleve(eleve).subscribe(
      {
        next : data => {
          alert("L'eleve a bien été ajouté à l'application !");
          this.ajoutEleveFormGroup.reset();
        },
        error : err => {
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
