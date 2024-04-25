import { Injectable } from '@angular/core';
import { ArticleDto } from '../models/article-dto';



@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  articles : ArticleDto[] = [
    {
      id : 1,codeArticle:'SEGWAY-NINEBOT',designation:'Trottinette électrique Ninebot F2 Plus',prixUnitaireHt:350 ,prixUnitaireTtc:399,
      photo:'assets\\trottinette-electrique-ninebot-f2-plus.avif',
      category:{
        code : 'sport' , designation:'trottinettes-electriques'
      }
    },
    {
      id : 2,codeArticle:'WISPEED',designation:'Trottinette électrique Enfant Wispeed T650 Navy Blue',prixUnitaireHt:380 ,prixUnitaireTtc:420,
      photo:'assets\\trottinette-electrique-enfant-wispeed-t650-navy-blue.avif',
      category:{
         code : 'sport' , designation:'trottinettes-electriques'
      }
    },
    {
      id : 3,codeArticle:'KIPRUN',designation:'MONTRE CONNECTÉE GPS 500 BY COROS NOIRE',prixUnitaireHt:105 ,prixUnitaireTtc:129,
      photo:'assets\\montre-connectee-gps-500-by-coros-noire.avif',
      category:{
        code : 'accessoire' , designation:'montre'
      }
    },
    {
      id : 4,codeArticle:'ROCKRIDER',designation:'VÉLO VTT RANDONNEE ST 120 NOIR BLEU 27,5"',prixUnitaireHt:35 ,prixUnitaireTtc:45,
      photo:'assets\\velo-vtt-randonnee-st-120-noir-bleu-275.avif',
      category:{
        code : 'sport' , designation:'velo-vtt'
      }
    },
    {
      id : 5,codeArticle:'DOMINOS',designation:'Tapis de course T520B Confort, 13 km/h, 43x121cm',prixUnitaireHt:35 ,prixUnitaireTtc:45,
      photo:'assets\\tapis-de-course-t520b-confort-13-kmh-43x121cm.avif',
      category:{
        code : 'sport' , designation:'tapis de course'
      }
    },

  ];
  
 
  constructor() { }
}
