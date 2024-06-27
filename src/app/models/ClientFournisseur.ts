export interface ClientFournisseur{
  id?: number;
  nom?:string;
  prenom?:string;
  email?:string;
  tel?:string;
  adresse?:string;
  codePostal?:string | null;
  ville?:string;
  pays?:string
}
