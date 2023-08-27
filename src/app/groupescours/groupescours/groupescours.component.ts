import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {GroupeCours} from "../../shared/models/groupeCours";
import {GroupescoursService} from "../../shared/service/groupescours.service";
import {FormEditGroupecoursComponent} from "../form-edit-groupecours/form-edit-groupecours.component";
import {MatDialog} from "@angular/material/dialog";
import {FormAjoutGroupecoursComponent} from "../form-ajout-groupecours/form-ajout-groupecours.component";

@Component({
  selector: 'app-groupescours',
  templateUrl: './groupescours.component.html',
  styleUrls: ['./groupescours.component.css']
})
export class GroupescoursComponent {

  groupesCours!: Observable<Array<GroupeCours>>;

  constructor(private groupesCoursService: GroupescoursService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.groupesCours = this.groupesCoursService.getAllGroupesCours()
  }

  openAjoutGroupeCoursFormDialog() {
    const dialogRef = this.dialog.open(FormAjoutGroupecoursComponent, {width: "1100px", height: "80vh"});
    dialogRef.afterClosed();
  }

  openEditGroupeCoursFormDialog(groupeCours: GroupeCours) {
    const dialogRef = this.dialog.open(FormEditGroupecoursComponent, {
      width: "1100px",
      height: "80vh",
      data: groupeCours
    });
    dialogRef.afterClosed();
  }
}
