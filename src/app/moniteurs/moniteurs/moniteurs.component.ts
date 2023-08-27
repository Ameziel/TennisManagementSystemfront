import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {Moniteur} from "../../shared/models/moniteur.model";
import {FormAjoutMoniteurComponent} from "../form-ajout-moniteur/form-ajout-moniteur.component";
import {FormEditMoniteurComponent} from "../form-edit-moniteur/form-edit-moniteur.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-moniteurs',
  templateUrl: './moniteurs.component.html',
  styleUrls: ['./moniteurs.component.css']
})
export class MoniteursComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["nom", "prenom", "email", "telephone", "qualification", "edit"];
  // dataSource: MatTableDataSource<Eleve>;
  // readonly moniteurs$ = this.moniteurService.getAllMoniteurs();
  moniteurs: Moniteur[] = [];


  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private moniteurService: MoniteursService,
              private dialog: MatDialog) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.eleves);
  }

  ngOnInit(): void {
    this.moniteurService.getAllMoniteurs().subscribe(
      moniteur => this.moniteurs = moniteur
    )
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

  openEditMoniteurFormDialog(moniteur: Moniteur) {
    const dialogRef = this.dialog.open(FormEditMoniteurComponent, {width: "1100px", height: "80vh", data: moniteur});
    dialogRef.afterClosed().subscribe(() => {  //avoid
      this.moniteurService.getAllMoniteurs().subscribe(
        m => this.moniteurs = m
      )
    });
  }

  openAjoutMoniteurFormDialog() {
    const dialogRef = this.dialog.open(FormAjoutMoniteurComponent, {width: "1100px", height: "80vh"});
    dialogRef.afterClosed().subscribe(() => {  //avoid
      this.moniteurService.getAllMoniteurs().subscribe(
        moniteur => this.moniteurs = moniteur
      )
    });
  }
}
