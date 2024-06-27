export interface Mouvement {
  date? : string;
  quantity? : number;
  type? : 'sortie' | 'entree';
  nature? : 'commande client'| 'commande fournisseur' | 'achat' | 'vente' ;
}
