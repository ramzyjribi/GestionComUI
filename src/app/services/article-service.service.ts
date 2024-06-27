import { Injectable } from '@angular/core';
import { ArticleDto } from '../models/article-dto';



@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  articles : ArticleDto[] = [
    {
      id : 1,codeArticle:'SEGWAY',designation:'Trottinette électrique Ninebot F2 Plus',prixUnitaireHt:350 ,prixUnitaireTtc:399,
      photo:'assets\\trottinette-electrique-ninebot-f2-plus.avif',
      category:{
        code : 'sport' , designation:'trottinettes-electriques'
      },stock : 140,
      mouvements:[
        {date : '12/02/2021' , quantity : 120 , type : "entree" , nature : "commande fournisseur"},
        {date : '05/04/2022' , quantity : 25 , type : "sortie" , nature : "commande client"},
        {date : '14/02/2023' , quantity : 105 , type : "sortie" , nature : "commande client"},
        {date : '28/02/2023' , quantity : 150 , type : "entree" , nature : "commande fournisseur"},
        {date : '12/06/2024' , quantity : 2 , type : "sortie" , nature : "vente"},
        ]
    },
    {
      id : 2,codeArticle:'WISPEED',designation:'Trottinette électrique Enfant Wispeed T650 Navy Blue',prixUnitaireHt:380 ,prixUnitaireTtc:420,
      photo:'assets\\trottinette-electrique-enfant-wispeed-t650-navy-blue.avif',
      category:{
         code : 'sport' , designation:'trottinettes-electriques'
      },stock : 105,
      mouvements:[
        {date : '15/02/2022' , quantity : 315 , type : "entree" , nature : "commande fournisseur"},
        {date : '13/05/2023' , quantity : 25 , type : "sortie" , nature : "commande client"},
        {date : '18/06/2023' , quantity : 105 , type : "sortie" , nature : "commande client"},
        {date : '22/08/2023' , quantity : 3 , type : "sortie" , nature : "vente"},
        {date : '05/02/2024' , quantity : 150 , type : "entree" , nature : "commande fournisseur"},
        {date : '25/05/2024' , quantity : 2 , type : "sortie" , nature : "vente"},
      ]
    },
    {
      id : 3,codeArticle:'KIPRUN',designation:'MONTRE CONNECTÉE GPS 500 BY COROS NOIRE',prixUnitaireHt:105 ,prixUnitaireTtc:129,
      photo:'assets\\montre-connectee-gps-500-by-coros-noire.avif',
      category:{
        code : 'accessoire' , designation:'montre'
      },stock : 35,
      mouvements:[
        {date : '10/08/2023' , quantity : 40 , type : "entree" , nature : "commande fournisseur"},
        {date : '15/06/2023' , quantity : 25 , type : "sortie" , nature : "commande client"},
        {date : '14/05/2024' , quantity : 5 , type : "sortie" , nature : "commande client"},
      ]
    },
    {
      id : 4,codeArticle:'ROCKRIDER',designation:'VÉLO VTT RANDONNEE ST 120 NOIR BLEU 27,5"',prixUnitaireHt:35 ,prixUnitaireTtc:45,
      photo:'assets\\velo-vtt-randonnee-st-120-noir-bleu-275.avif',
      category:{
        code : 'sport' , designation:'velo-vtt'
      },stock : 598,
      mouvements:[
        {date : '12/02/2021' , quantity : 488 , type : "entree" , nature : "commande fournisseur"},
        {date : '12/02/2021' , quantity : 25 , type : "sortie" , nature : "commande client"},
        {date : '12/02/2021' , quantity : 5 , type : "sortie" , nature : "vente"},
        {date : '12/02/2021' , quantity : 105 , type : "entree" , nature : "commande client"},
        {date : '12/02/2021' , quantity : 150 , type : "entree" , nature : "commande fournisseur"},
        {date : '12/02/2021' , quantity : 2 , type : "sortie" , nature : "vente"},
      ]
    },
    {
      id : 5,codeArticle:'DOMINOS',designation:'Tapis de course T520B Confort, 13 km/h, 43x121cm',prixUnitaireHt:35 ,prixUnitaireTtc:45,
      photo:'assets\\tapis-de-course-t520b-confort-13-kmh-43x121cm.avif',
      category:{
        code : 'sport' , designation:'tapis de course'
      },stock : 172,
      mouvements:[
        {date : '12/02/2021' , quantity : 280 , type : "entree" , nature : "commande fournisseur"},
        {date : '12/02/2021' , quantity : 25 , type : "sortie" , nature : "commande client"},
        {date : '12/02/2021' , quantity : 105 , type : "sortie" , nature : "commande client"},

      ]
    },

  ];


  constructor() { }
}
