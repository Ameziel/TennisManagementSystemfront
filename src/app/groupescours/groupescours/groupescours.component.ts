import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {GroupeCours} from "../../shared/models/groupeCours";
import {GroupescoursService} from "../../shared/service/groupescours.service";

@Component({
  selector: 'app-groupescours',
  templateUrl: './groupescours.component.html',
  styleUrls: ['./groupescours.component.css']
})
export class GroupescoursComponent {

  groupesCours!: Observable<Array<GroupeCours>>;

  constructor(private groupesCoursService: GroupescoursService) {
  }

  ngOnInit(): void {
    this.groupesCours = this.groupesCoursService.getAllGroupesCours()
  }
}
