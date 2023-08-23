enum Qualification {
  Animateur = "Animateur",
  Initiateur = "INITIATEUR",
  Educateur = "EDUCATEUR",
  Entraineur = "ENTRAINEUR"

}
export interface Moniteur {
  id: string;
  prenom : string;
  nom : string;
  email : string;
  telephone : string;
  qualification: string;
  actif: boolean;
}
