import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ElevesService} from "../../shared/service/eleves.service";
import {Eleve} from "../../shared/models/eleve.model";
import {MatDialog} from '@angular/material/dialog';
import {FormEditComponent} from "../form-edit/form-edit.component";
import {FormAjoutComponent} from "../form-ajout/form-ajout.component";

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["nom", "prenom", "genre", "telephone", "email", "dateDeNaissance", "edit"];
  // dataSource: MatTableDataSource<Eleve>;
  eleves: Eleve[] = [];
  //readonly eleves$ = this.eleveService.getAllEleves(); permet de récupérer tous les élèves mais pas de faire un refresh automatique comme la v2
  //avec le ngOnIint et le subscribe


  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private eleveService: ElevesService,
              private dialog: MatDialog) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.eleves);
  }

  ngOnInit(): void {
    this.eleveService.getAllEleves().subscribe(
      e => this.eleves = e
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

  openEditEleveFormDialog(eleve: Eleve) {
    const dialogRef = this.dialog.open(FormEditComponent, {width: "1100px", height: "80vh", data: eleve});
    dialogRef.afterClosed().subscribe(() => {  //avoid
      this.eleveService.getAllEleves().subscribe(
        e => this.eleves = e
      )
    });
  }

  openAjoutEleveFormDialog() {
    const dialogRef = this.dialog.open(FormAjoutComponent, {width: "1100px", height: "80vh"});
    dialogRef.afterClosed().subscribe(() => {  //avoid
      this.eleveService.getAllEleves().subscribe(
        e => this.eleves = e
      )
    });
  }
}



