import {Component, OnInit} from '@angular/core';
import {FormulecoursService} from "../../shared/service/formulecours.service";
import {Observable} from "rxjs";
import {Formulecours} from "../../shared/models/formulecours.model";

@Component({
  selector: 'app-formulescours',
  templateUrl: './formulescours.component.html',
  styleUrls: ['./formulescours.component.css']
})
export class FormulescoursComponent implements OnInit {
  formules!: Observable<Array<Formulecours>>;

  constructor(private formulesCoursService: FormulecoursService) {
  }

  ngOnInit(): void {
    this.formules = this.formulesCoursService.getAllFormules();
  }
}
