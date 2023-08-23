import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {Moniteur} from "../../shared/models/moniteur.model";

@Component({
  selector: 'app-form-ajout-moniteur',
  templateUrl: './form-ajout-moniteur.component.html',
  styleUrls: ['./form-ajout-moniteur.component.css']
})
export class FormAjoutMoniteurComponent {

  ajoutMoniteurFormGroup! : FormGroup;

  constructor(private moniteurService : MoniteursService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.ajoutMoniteurFormGroup = this.formBuilder.group(
      {
        prenom: this.formBuilder.control(null, [Validators.required]),
        nom: this.formBuilder.control(null, [Validators.required]),
        email: this.formBuilder.control(null, [Validators.required]),   //TODO validator email telephone
        telephone: this.formBuilder.control(null, [Validators.required]),
        qualification: this.formBuilder.control([Validators.required]),
        actif: this.formBuilder.control(false),
      })
  };

  handleSaveEleve() {
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
