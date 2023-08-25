import { Component } from '@angular/core';
import {InscriptionsformuleService} from "../../shared/service/inscriptionsformule.service";

@Component({
  selector: 'app-inscriptionsformule',
  templateUrl: './inscriptionsformule.component.html',
  styleUrls: ['./inscriptionsformule.component.css']
})
export class InscriptionsformuleComponent {

  readonly inscriptionsFormule$ = this.inscriptionsFormuleService.getAllInscriptionsFormule();

  constructor(private inscriptionsFormuleService : InscriptionsformuleService) {
  }

}
