enum Qualification {
  Aucun = "AUCUN",
  Animateur = "ANIMATEUR",
  Initiateur = "INITIATEUR",
  Educateur = "EDUCATEUR",
  Entraineur = "ENTRAINEUR"
}

export interface Moniteur {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  qualification: Qualification;
  actif: boolean;
}
