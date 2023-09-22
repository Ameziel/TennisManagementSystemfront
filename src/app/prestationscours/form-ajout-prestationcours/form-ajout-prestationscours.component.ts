import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupeCours} from "../../shared/models/groupeCours";
import {MoyenPaiement} from "../../shared/models/inscriptionFormule";
import {GroupescoursService} from "../../shared/service/groupescours.service";
import {Moniteur} from "../../shared/models/moniteur.model";
import {PrestationscoursService} from "../../shared/service/prestationscours.service";
import {PrestationCours} from "../../shared/models/prestationCours";
import {MoniteursService} from "../../shared/service/moniteurs.service";

@Component({
  selector: 'app-form-ajout-prestationscours',
  templateUrl: './form-ajout-prestationcours.component.html',
  styleUrls: ['./form-ajout-prestationcours.component.css']
})
export class FormAjoutPrestationscoursComponent implements OnInit {
  maxDate = new Date();
  ajoutPrestationCoursFormuleGroup!: FormGroup;

  readonly moniteurs$ = this.moniteurService.getAllMoniteurs();
  readonly groupesCours$ = this.groupeCoursService.getAllGroupesCours();
  listMoniteurs: Moniteur[] = [];
  listGroupesCours: GroupeCours[] = [];

  moyensPaiement = Object.values(MoyenPaiement);

  constructor(private prestationscoursService: PrestationscoursService,
              private moniteurService: MoniteursService,
              private groupeCoursService: GroupescoursService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.ajoutPrestationCoursFormuleGroup = this.formBuilder.group(
      {
        datePrestation: this.formBuilder.control(null, [Validators.required]),
        dureeSeanceMinutePrestation: this.formBuilder.control(0, [Validators.required]),
        commentaire: this.formBuilder.control(null, [Validators.required]),
        referenceMoniteur: this.formBuilder.control(null, [Validators.required]),
        referenceGroupe: this.formBuilder.control(null, [Validators.required]),

      });
    this.groupeCoursService.getAllGroupesCours().subscribe(gps => { // TODO choisir les groupes actifs
      this.listGroupesCours = gps;
    });
    this.moniteurService.getAllMoniteurs().subscribe(moniteur => { //TODO Choisir les moniteurs actives encore
      this.listMoniteurs = moniteur;
    });
  };

  handleSavePrestationCours() {
    let prestationCours: PrestationCours = this.ajoutPrestationCoursFormuleGroup.value;
    this.prestationscoursService.savePrestationCours(prestationCours).subscribe(
      {
        next: data => {
          alert("La prestation a bien été enregistrée !");
          this.ajoutPrestationCoursFormuleGroup.reset();
        },
        error: err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
