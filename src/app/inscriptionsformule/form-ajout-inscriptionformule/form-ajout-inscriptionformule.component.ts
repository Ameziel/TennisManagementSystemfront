import {Component} from '@angular/core';
import {InscriptionsformuleService} from "../../shared/service/inscriptionsformule.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ElevesService} from "../../shared/service/eleves.service";
import {FormulescoursService} from "../../shared/service/formulescours.service";
import {GroupescoursService} from "../../shared/service/groupescours.service";
import {InscriptionFormule, MoyenPaiement} from "../../shared/models/inscriptionFormule";
import {Eleve} from "../../shared/models/eleve.model";
import {GroupeCours} from "../../shared/models/groupeCours";
import {Formulecours} from "../../shared/models/formuleCours.model";

@Component({
  selector: 'app-form-ajout-inscriptionformule',
  templateUrl: './form-ajout-inscriptionformule.component.html',
  styleUrls: ['./form-ajout-inscriptionformule.component.css']
})
export class FormAjoutInscriptionformuleComponent {
  ajoutInscriptionFormuleGroup!: FormGroup;

  readonly eleves$ = this.eleveService.getAllEleves();
  readonly groupesCours = this.groupeCoursService.getAllGroupesCours();
  readonly formules = this.formuleCoursService.getAllFormules();

  listEleves: Eleve[] = [];
  listGroupesCours: GroupeCours[] = [];
  listFormulesCours: Formulecours[] = [];
  moyensPaiement = Object.values(MoyenPaiement);

  constructor(private inscriptionFormuleSerivce: InscriptionsformuleService,
              private eleveService: ElevesService,
              private groupeCoursService: GroupescoursService,
              private formuleCoursService: FormulescoursService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.ajoutInscriptionFormuleGroup = this.formBuilder.group(
      {
        datePaiement: this.formBuilder.control(null, [Validators.required]),
        montantPercu: this.formBuilder.control(0, [Validators.required]),
        notePaiement: this.formBuilder.control(null, [Validators.required]),
        moyenPaiement: this.formBuilder.control(null, [Validators.required]),
        referenceEleve: this.formBuilder.control(null, [Validators.required]),
        referenceGroupeCours: this.formBuilder.control([Validators.required]),
        referenceFormuleCours: this.formBuilder.control(null, [Validators.required]),

      });
    this.eleveService.getAllEleves().subscribe(e => { //TODO choisir l'élève actif
      this.listEleves = e;
    });
    this.groupeCoursService.getAllGroupesCours().subscribe(gps => { // TODO choisir les groupes actifs
      this.listGroupesCours = gps;
    });
    this.formuleCoursService.getAllFormules().subscribe(fc => { //TODO Choisir les formules actives encore
      this.listFormulesCours = fc;
    });
  };

  handleSaveInscriptionFormule() {
    let inscriptionFormule: InscriptionFormule = this.ajoutInscriptionFormuleGroup.value;
    this.inscriptionFormuleSerivce.saveInscriptionFormule(inscriptionFormule).subscribe(
      {
        next: data => {
          alert("L'inscription a bien été enregistrée !");
          this.ajoutInscriptionFormuleGroup.reset();
        },
        error: err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
