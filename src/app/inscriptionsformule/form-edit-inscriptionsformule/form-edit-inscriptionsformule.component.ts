import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Eleve} from "../../shared/models/eleve.model";
import {GroupeCours} from "../../shared/models/groupeCours";
import {Formulecours} from "../../shared/models/formuleCours.model";
import {InscriptionFormule, MoyenPaiement} from "../../shared/models/inscriptionFormule";
import {InscriptionsformuleService} from "../../shared/service/inscriptionsformule.service";
import {ElevesService} from "../../shared/service/eleves.service";
import {GroupescoursService} from "../../shared/service/groupescours.service";
import {FormulescoursService} from "../../shared/service/formulescours.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form-edit-inscriptionsformule',
  templateUrl: './form-edit-inscriptionsformule.component.html',
  styleUrls: ['./form-edit-inscriptionsformule.component.css']
})
export class FormEditInscriptionsformuleComponent {

  editInscriptionFormuleGroup!: FormGroup;

  readonly eleves$ = this.eleveService.getAllEleves();
  readonly groupesCours$ = this.groupeCoursService.getAllGroupesCours();
  readonly formules$ = this.formuleCoursService.getAllFormules();

  listEleves: Eleve[] = [];
  listGroupesCours: GroupeCours[] = [];
  listFormulesCours: Formulecours[] = [];
  moyensPaiement = Object.values(MoyenPaiement);

  constructor(private inscriptionFormuleSerivce: InscriptionsformuleService,
              private eleveService: ElevesService,
              private groupeCoursService: GroupescoursService,
              private formuleCoursService: FormulescoursService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: InscriptionFormule,
              private dialogRef: MatDialogRef<FormEditInscriptionsformuleComponent>) {
  }

  ngOnInit(): void {
    this.editInscriptionFormuleGroup = this.formBuilder.group(
      {
        id: this.formBuilder.control(null, [Validators.required]),
        datePaiement: this.formBuilder.control(null, [Validators.required]),
        montantPercu: this.formBuilder.control(0, [Validators.required]),
        notePaiement: this.formBuilder.control(null, [Validators.required]),
        moyenPaiement: this.formBuilder.control(null, [Validators.required]),
        referenceEleve: this.formBuilder.control("", [Validators.required]),
        referenceGroupeCours: this.formBuilder.control("",[Validators.required]),
        referenceFormuleCours: this.formBuilder.control("", [Validators.required]),

      });
    this.editInscriptionFormuleGroup.setValue(this.data);
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

  handleEditInscriptionFormule() {
    let inscriptionFormule: InscriptionFormule = this.editInscriptionFormuleGroup.value;
    this.inscriptionFormuleSerivce.updateInscriptionFormule(inscriptionFormule).subscribe(
      {
        next: data => {
          alert("L'inscription a bien été enregistrée !");
          this.editInscriptionFormuleGroup.reset();
          this.dialogRef.close();
        },
        error: err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
