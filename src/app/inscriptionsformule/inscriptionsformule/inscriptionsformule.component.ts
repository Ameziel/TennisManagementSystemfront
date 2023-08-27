import { Component } from '@angular/core';
import {InscriptionsformuleService} from "../../shared/service/inscriptionsformule.service";
import {FormAjoutComponent} from "../../eleves/form-ajout/form-ajout.component";
import {
  FormAjoutInscriptionformuleComponent
} from "../form-ajout-inscriptionformule/form-ajout-inscriptionformule.component";
import {
  FormEditInscriptionsformuleComponent
} from "../form-edit-inscriptionsformule/form-edit-inscriptionsformule.component";
import {MatDialog} from "@angular/material/dialog";
import {InscriptionFormule} from "../../shared/models/inscriptionFormule";

@Component({
  selector: 'app-inscriptionsformule',
  templateUrl: './inscriptionsformule.component.html',
  styleUrls: ['./inscriptionsformule.component.css']
})
export class InscriptionsformuleComponent {

  readonly inscriptionsFormule$ = this.inscriptionsFormuleService.getAllInscriptionsFormule();

  constructor(private inscriptionsFormuleService : InscriptionsformuleService,
              private dialog: MatDialog) {
  }

  openAjoutFormuleFormDialog() {
    const dialogRef = this.dialog.open(FormAjoutInscriptionformuleComponent, {width: "1100px", height: "80vh"});
    dialogRef.afterClosed();
  }

  openEditInscriptionFormuleFormDialog(inscriptionFormule: InscriptionFormule) {
    const dialogRef = this.dialog.open(FormEditInscriptionsformuleComponent, {width: "1100px", height: "80vh", data: inscriptionFormule});
    dialogRef.afterClosed();
  }
}
