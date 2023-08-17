export interface Formulecours {
  id: string;
  libelle : string;
  effectifMaximum : number;
  nombreSeanceTotal : number;
  nombreSeanceHebdomadaire : number;
  dureeSeanceMinute : number; 
  tarif: number;
  annee : number;
  dateDebut : string;
  dateFin : string;
  periode : string;
  typeBalle: string;
  actif: boolean;
}
