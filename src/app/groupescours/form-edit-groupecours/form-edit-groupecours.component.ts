import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupescoursService} from "../../shared/service/groupescours.service";
import {GroupeCours} from "../../shared/models/groupeCours";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form-edit-groupecours',
  templateUrl: './form-edit-groupecours.component.html',
  styleUrls: ['./form-edit-groupecours.component.css']
})
export class FormEditGroupecoursComponent {
  value = 'Clear me';
  editGroupeCoursFormGroup!: FormGroup;

  constructor(private groupeCoursService: GroupescoursService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: GroupeCours,
              private dialogRef: MatDialogRef<FormEditGroupecoursComponent>) {
  }

  ngOnInit(): void {
    this.editGroupeCoursFormGroup = this.formBuilder.group(
      {
        id: this.formBuilder.control(null, [Validators.required]),
        libelle: this.formBuilder.control(null, [Validators.required]),
        actif: this.formBuilder.control(false, [Validators.required]),
      })
    this.editGroupeCoursFormGroup.setValue(this.data);;
  };

  handleEditGroupeCours() {
    let groupeCours: GroupeCours = this.editGroupeCoursFormGroup.value;
    this.groupeCoursService.updateGroupeCours(groupeCours).subscribe(
      {
        next: data => {
          alert("Le groupe a bien été ajouté à l'application !");
          this.dialogRef.close();
        },
        error: err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }
}
