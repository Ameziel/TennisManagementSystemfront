import {Component, OnInit} from '@angular/core';
import {FormulescoursService} from "../../shared/service/formulescours.service";
import {Observable} from "rxjs";
import {Formulecours} from "../../shared/models/formuleCours.model";

@Component({
  selector: 'app-formulescours',
  templateUrl: './formulescours.component.html',
  styleUrls: ['./formulescours.component.css']
})
export class FormulescoursComponent implements OnInit {
  formules!: Observable<Array<Formulecours>>;

  constructor(private formulesCoursService: FormulescoursService) {
  }

  ngOnInit(): void {
    this.formules = this.formulesCoursService.getAllFormules();
  }
}
