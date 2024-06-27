import {LigneCommande} from "./ligne-commande";

export interface Commande{
  codeCommande? :string;
  nom?:string;
  prenom?:string;
  email?:string;
  tel?:string;
  adresse?:string;
  codePostal?:string | null;
  ville?:string;
  pays?:string
  date?:any;
  articles : LigneCommande[];
  total? : number;
}
