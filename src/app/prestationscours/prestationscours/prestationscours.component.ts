import {Component, OnInit} from '@angular/core';
import {PrestationscoursService} from "../../shared/service/prestationscours.service";
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {Moniteur} from "../../shared/models/moniteur.model";
import {MatDialog} from "@angular/material/dialog";
import {PrestationCours} from "../../shared/models/prestationCours";
import {FormEditPrestationcoursComponent} from "../form-edit-prestationcours/form-edit-prestationcours.component";
import {FormAjoutPrestationscoursComponent} from "../form-ajout-prestationcours/form-ajout-prestationscours.component";

@Component({
  selector: 'app-prestationscours',
  templateUrl: './prestationscours.component.html',
  styleUrls: ['./prestationscours.component.css']
})
export class PrestationscoursComponent implements OnInit {

  displayedColumns: string[] = ["datePrestation", "dureeSeanceMinutePrestation", "moniteur", "commentaire", "edit"];
  listMoniteurs: Moniteur[] = [];
  listPrestations: PrestationCours[] = [];

  constructor(private prestationsCoursService: PrestationscoursService,
              private moniteurService: MoniteursService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.moniteurService.getAllMoniteurs().subscribe(moniteurs => {
      this.listMoniteurs = moniteurs;
    });
    this.prestationsCoursService.getAllPrestationsCours().subscribe(prestations => {
      this.listPrestations = prestations
    })
  }

  ngAfterViewInit() {
    // @ts-ignore
    // this.dataSource.paginator = this.paginator;
    // @ts-ignore
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    //   // if (this.dataSource.paginator) {
    //   //   this.dataSource.paginator.firstPage();
    // }
  }

  openEditPrestationCoursFormDialog(prestationCours: PrestationCours) {
    const dialogRef = this.dialog.open(FormEditPrestationcoursComponent, {
      width: "1100px",
      height: "80vh",
      data: prestationCours
    });
    dialogRef.afterClosed().subscribe(() => {  //avoid
      this.prestationsCoursService.getAllPrestationsCours().subscribe(
        prestations => this.listPrestations = prestations
      )
    });
  }

  openAjoutPrestationCoursFormDialog() {
    const dialogRef = this.dialog.open(FormAjoutPrestationscoursComponent, {width: "1100px", height: "80vh"});
    dialogRef.afterClosed().subscribe(() => {  //avoid
      this.prestationsCoursService.getAllPrestationsCours().subscribe(
        prestations => this.listPrestations = prestations
      )
    });
  }
}
