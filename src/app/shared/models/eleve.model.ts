
enum Genre {
  Homme = 'H',
  Femme = 'F'
}

export interface Eleve {
  id: string;
  prenom : string;
  nom : string;
  genre : Genre, // union de string
  telephone : string;
  email : string;
  dateDeNaissance: string; // 2023-08-15T17:20:38Z iso8801 iso zulu time (https://fr.wikipedia.org/wiki/ISO_8601)
  details : string;
  actif : boolean;
}
