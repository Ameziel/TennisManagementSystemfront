export enum CategorieAge {
  Enfant = "ENFANT",
  Jeune = "JEUNE",
  Adolescent = "ADOLESCENT",
  Adulte = "ADULTE",
}
export enum Periode{
  Ete = "ETE",
    Hiver = "HIVER",
    Annee = "ANNEE"
}
export enum TypeBalle {
  Rouge = "ROUGE",
  Orange = "ORANGE",
  Verte = "VERTE",
  Jaune = "JAUNE"
}
export enum Niveau {
  Loisir = "LOISIR",
  QuatriemeSerie = "QUATRIEME_SERIE",
  TroisiemeSerie = "TROISIEME_SERIE",
  DeuxiemeSerie = "DEUXIEME_SERIE"
}
export interface Formulecours {
  id: string;
  effectifMaximum : number;
  nombreSeanceTotal : number;
  nombreSeanceHebdomadaire : number;
  dureeSeanceMinuteCours : number;
  tarif: number;
  dateDebut : string;
  dateFin : string;
  categorieAge : CategorieAge;
  periode : Periode;
  typeBalle: TypeBalle;
  niveau : Niveau;
  actif: boolean;
}
