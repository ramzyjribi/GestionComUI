import { CategoryDto } from "./categorie-dto";
import {Mouvement} from "./mouvement";

export interface ArticleDto {
  id?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  photo?: string;
  category?: CategoryDto;
  stock?: number;
  idEntreprise?: number;
  mouvements? : Mouvement[];
}


