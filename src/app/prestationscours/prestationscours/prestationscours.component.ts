import {Component, OnInit} from '@angular/core';
import {PrestationscoursService} from "../../shared/service/prestationscours.service";
import {MoniteursService} from "../../shared/service/moniteurs.service";
import {Moniteur} from "../../shared/models/moniteur.model";

@Component({
  selector: 'app-prestationscours',
  templateUrl: './prestationscours.component.html',
  styleUrls: ['./prestationscours.component.css']
})
export class PrestationscoursComponent implements OnInit{

  displayedColumns: string[] = ["datePrestation", "dureeSeanceMinutePrestation", "moniteur", "commentaire", "edit"];

  readonly prestationsCours$ = this.prestationsCoursService.getAllPrestationsCours();
  listMoniteurs: Moniteur[] = [];

  constructor(private prestationsCoursService: PrestationscoursService, private moniteurService: MoniteursService) {
  }

  ngOnInit() {
    this.moniteurService.getAllMoniteurs().subscribe(moniteur => {
      this.listMoniteurs = moniteur;
    });
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
