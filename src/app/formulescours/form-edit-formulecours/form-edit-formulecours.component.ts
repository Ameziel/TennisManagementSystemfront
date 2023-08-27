import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategorieAge, Formulecours, Niveau, Periode, TypeBalle} from "../../shared/models/formuleCours.model";
import {FormulescoursService} from "../../shared/service/formulescours.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Eleve} from "../../shared/models/eleve.model";

@Component({
  selector: 'app-form-edit-formulecours',
  templateUrl: './form-edit-formulecours.component.html',
  styleUrls: ['./form-edit-formulecours.component.css']
})
export class FormEditFormulecoursComponent {
  minDate: Date = new Date();
  editFormuleCoursFormGroup!: FormGroup;
  categoriesAges = Object.values(CategorieAge);
  periodes = Object.values(Periode);
  typesBalles = Object.values(TypeBalle);
  niveaux = Object.values(Niveau);


  constructor(private formuleCoursService: FormulescoursService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: Formulecours,
              private dialogRef: MatDialogRef<FormEditFormulecoursComponent>)  {
  }

  ngOnInit(): void {
    this.editFormuleCoursFormGroup = this.formBuilder.group(
      {
        id: this.formBuilder.control(null, [Validators.required]),
        effectifMaximum: this.formBuilder.control(null, [Validators.required]),
        nombreSeanceTotal: this.formBuilder.control(null, [Validators.required]),
        nombreSeanceHebdomadaire: this.formBuilder.control(null, [Validators.required]),
        dureeSeanceMinuteFormuleCours: this.formBuilder.control(60, [Validators.required]),
        tarif: this.formBuilder.control(null, [Validators.required]), //On utilisera un Math.round au cas ou
        dateDebut: this.formBuilder.control([Validators.required]),
        dateFin: this.formBuilder.control(null, [Validators.required]),
        categorieAge: this.formBuilder.control(false, [Validators.required]),
        periode: this.formBuilder.control(null, [Validators.required]),
        typeBalle: this.formBuilder.control(null, [Validators.required]),
        niveau: this.formBuilder.control(null, [Validators.required]),
        actif: this.formBuilder.control(null, [Validators.required]),
      })
    this.editFormuleCoursFormGroup.setValue(this.data);
  };

  handleEditFormuleCours() {
    let formulecours:Formulecours = this.editFormuleCoursFormGroup.value;
    this.formuleCoursService.updateFormuleCours(formulecours).subscribe(
      {
        next : data => {
          alert("La formule a bien été éditée !");
          this.editFormuleCoursFormGroup.reset();
        },
        error : err => {
          alert("Une erreur s'est produite pendant l'enregistrement");
        }
      }
    );
  }

  iterationCount(number: number): Array<number> {
    {
      return Array(number);
    }
  }
}
