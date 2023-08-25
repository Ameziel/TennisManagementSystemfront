import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Eleve} from 'src/app/shared/models/eleve.model';
import {ElevesService} from "../../shared/service/eleves.service";

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

  constructor(private eleveService : ElevesService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ajoutEleveFormGroup = this.formBuilder.group(
      {
        prenom: this.formBuilder.control(null, [Validators.required]),
        nom: this.formBuilder.control(null, [Validators.required]),
        genre: this.formBuilder.control(null),
        email: this.formBuilder.control(null, [Validators.required]),   //TODO validator email telephone
        telephone: this.formBuilder.control(null, [Validators.required]),
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
