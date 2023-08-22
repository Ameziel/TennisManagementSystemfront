import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ElevesService} from "../../shared/service/eleves.service";
import {Eleve} from "../../shared/models/eleve.model";

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements AfterViewInit {
  displayedColumns: string[] = ["nom","prenom", "genre", "telephone","email", "dateDeNaissance", "edit"];
  // dataSource: MatTableDataSource<Eleve>;
  readonly eleves$ = this.eleveService.getAllEleves();


  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  // @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private eleveService : ElevesService) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.eleves);
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
}



