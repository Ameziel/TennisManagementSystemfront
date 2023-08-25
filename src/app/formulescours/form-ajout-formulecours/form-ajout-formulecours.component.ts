import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormulescoursService} from "../../shared/service/formulescours.service";
import {CategorieAge, Formulecours, Niveau, Periode, TypeBalle} from "../../shared/models/formuleCours.model";

@Component({
  selector: 'app-form-ajout-formulecours',
  templateUrl: './form-ajout-formulecours.component.html',
  styleUrls: ['./form-ajout-formulecours.component.css']
})
export class FormAjoutFormulecoursComponent {
  minDate: Date = new Date();
  ajoutFormuleCoursFormGroup!: FormGroup;
  categoriesAges = Object.values(CategorieAge);
  periodes = Object.values(Periode);
  typesBalles = Object.values(TypeBalle);
  niveaux = Object.values(Niveau);


  constructor(private formuleCoursService: FormulescoursService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.ajoutFormuleCoursFormGroup = this.formBuilder.group(
      {
        effectifMaximum: this.formBuilder.control(1, [Validators.required]),
        nombreSeanceTotal: this.formBuilder.control(1, [Validators.required]),
        nombreSeanceHebdomadaire: this.formBuilder.control(1, [Validators.required]),
        dureeSeanceMinuteCours: this.formBuilder.control(null, [Validators.required]),
        tarif: this.formBuilder.control(null, [Validators.required]), //On utilisera un Math.round au cas ou
        dateDebut: this.formBuilder.control([Validators.required]),
        dateFin: this.formBuilder.control(null, [Validators.required]),
        categorieAge: this.formBuilder.control(false, [Validators.required]),
        periode: this.formBuilder.control(null, [Validators.required]),
        typeBalle: this.formBuilder.control(null, [Validators.required]),
        niveau: this.formBuilder.control(null, [Validators.required]),
        actif: this.formBuilder.control(null, [Validators.required]),
      })
  };

  handleSaveFormuleCours() {
    let formulecours:Formulecours = this.ajoutFormuleCoursFormGroup.value;
    this.formuleCoursService.saveFormuleCours(formulecours).subscribe(
      {
        next : data => {
          alert("La formule a bien été ajoutée à l'application !");
          this.ajoutFormuleCoursFormGroup.reset();
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
