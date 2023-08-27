import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {Moniteur} from "../../shared/models/moniteur.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Eleve} from "../../shared/models/eleve.model";

@Component({
  selector: 'app-form-edit-moniteur',
  templateUrl: './form-edit-moniteur.component.html',
  styleUrls: ['./form-edit-moniteur.component.css']
})
export class FormEditMoniteurComponent {
  editMoniteurFormGroup! : FormGroup;

  constructor(private moniteurService : MoniteursService,private formBuilder : FormBuilder, @Inject(MAT_DIALOG_DATA) private data: Eleve, private dialogRef: MatDialogRef<FormEditMoniteurComponent>) { }

  ngOnInit(): void {
    this.editMoniteurFormGroup = this.formBuilder.group(
      {
        id: this.formBuilder.control(null, [Validators.required]),
        prenom: this.formBuilder.control(null, [Validators.required]),
        nom: this.formBuilder.control(null, [Validators.required]),
        email: this.formBuilder.control(null, [Validators.required]),   //TODO validator email telephone
        telephone: this.formBuilder.control(null, [Validators.required]),
        qualification: this.formBuilder.control([Validators.required]),
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
