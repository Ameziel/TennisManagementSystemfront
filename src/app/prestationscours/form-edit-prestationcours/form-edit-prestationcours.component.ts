import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Moniteur} from "../../shared/models/moniteur.model";
import {GroupeCours} from "../../shared/models/groupeCours";
import {MoyenPaiement} from "../../shared/models/inscriptionFormule";
import {PrestationscoursService} from "../../shared/service/prestationscours.service";
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {GroupescoursService} from "../../shared/service/groupescours.service";
import {PrestationCours} from "../../shared/models/prestationCours";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form-edit-prestationcours',
  templateUrl: './form-edit-prestationcours.component.html',
  styleUrls: ['./form-edit-prestationcours.component.css']
})
export class FormEditPrestationcoursComponent {
  editPrestationCoursFormuleGroup!: FormGroup;

  readonly moniteurs$ = this.moniteurService.getAllMoniteurs();
  readonly groupesCours$ = this.groupeCoursService.getAllGroupesCours();
  listMoniteurs: Moniteur[] = [];
  listGroupesCours: GroupeCours[] = [];

  moyensPaiement = Object.values(MoyenPaiement);

  constructor(private prestationscoursService: PrestationscoursService,
              private moniteurService: MoniteursService,
              private groupeCoursService: GroupescoursService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: PrestationCours,
              private dialogRef: MatDialogRef<FormEditPrestationcoursComponent>) {
  }

  ngOnInit(): void {
    this.editPrestationCoursFormuleGroup = this.formBuilder.group(
      {
        id: this.formBuilder.control(null, [Validators.required]),
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
    this.editPrestationCoursFormuleGroup.setValue(this.data);
  };

  handleEditPrestationCours() {
    let prestationCours: PrestationCours = this.editPrestationCoursFormuleGroup.value;
    this.prestationscoursService.updatePrestationCours(prestationCours).subscribe(
      {
        next: data => {
          alert("La prestation a bien été enregistrée !");
          this.editPrestationCoursFormuleGroup.reset();
        },
        error: err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
