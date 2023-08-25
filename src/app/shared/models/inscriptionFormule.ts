export enum MoyenPaiement {
  Virement ="VIREMENT",
  Liquide ="LIQUIDE",
}
export interface InscriptionFormule {
id: string,
  datePaiement: string,
  montantPercu: number,
  notePaiement: string,
  moyenPaiement: MoyenPaiement,
  referenceEleve: string,
  referenceGroupeCours: string,
  referenceFormuleCours: string,
}
