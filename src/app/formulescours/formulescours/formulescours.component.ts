import {Component, OnInit} from '@angular/core';
import {FormulescoursService} from "../../shared/service/formulescours.service";
import {Observable} from "rxjs";
import {Formulecours} from "../../shared/models/formuleCours.model";
import {FormAjoutComponent} from "../../eleves/form-ajout/form-ajout.component";
import {FormEditComponent} from "../../eleves/form-edit/form-edit.component";
import {MatDialog} from "@angular/material/dialog";
import {FormEditFormulecoursComponent} from "../form-edit-formulecours/form-edit-formulecours.component";
import {FormAjoutFormulecoursComponent} from "../form-ajout-formulecours/form-ajout-formulecours.component";

@Component({
  selector: 'app-formulescours',
  templateUrl: './formulescours.component.html',
  styleUrls: ['./formulescours.component.css']
})
export class FormulescoursComponent implements OnInit {
  formules!: Observable<Array<Formulecours>>;


  constructor(private formulesCoursService: FormulescoursService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.formules = this.formulesCoursService.getAllFormules();
  }

  openEditFormuleCoursFormDialog(formule: Formulecours) {
    const dialogRef = this.dialog.open(FormEditFormulecoursComponent, {width: "1100px", height: "80vh", data: formule});
    dialogRef.afterClosed();
  }


  openAjoutFormuleCoursFormDialog() {
    const dialogRef = this.dialog.open(FormAjoutFormulecoursComponent, {width: "1100px", height: "80vh"});
    dialogRef.afterClosed();
  }
}
