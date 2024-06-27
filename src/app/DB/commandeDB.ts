import {Commande} from "../models/commande";

export const commandeDB : Commande[] = [
  {codeCommande:"CMD100" ,date :"12/05/2024","prenom":"Avril","nom":"Robecon",
  "email":"arobecon2@fc2.com","tel":"7835264096","adresse":"3 Stephen Lane","codePostal":"55530","ville":"Yeşilköy",total :3040,
  articles : [
    { codeArticle:'DOMINOS',designation:'Tapis de course T520B Confort, 13 km/h, 43x121cm' ,quantite : 10 ,prixUnitaire : 120 , valeur : 1200  },
    { codeArticle:'SEGWAY',designation:'Trottinette électrique Ninebot F2 Plus' ,quantite : 13 ,prixUnitaire : 80 , valeur : 1040  },
    { codeArticle:'WISPEED',designation:'Trottinette électrique Enfant Wispeed T650 Navy Blue' ,quantite : 5 ,prixUnitaire : 100 , valeur : 500  },
    { codeArticle:'KIPRUN',designation:'MONTRE CONNECTÉE GPS 500 BY COROS NOIRE' ,quantite : 2 ,prixUnitaire : 120 , valeur : 240  },
    { codeArticle:'KIPRUN',designation:'MONTRE CONNECTÉE GPS 500 BY COROS NOIRE' ,quantite : 3 ,prixUnitaire : 20 , valeur : 60  },
  ]
  },
  {codeCommande:"CMD102" ,date :"22/6/2024","prenom":"Willi","nom":"Jeary","email":"wjearyd@blinklist.com","tel":"7536621896",
    "adresse":"84885 Holy Cross Circle","codePostal":null,"ville":"Muara Siberut",total :3360,
    articles : [
      { codeArticle:'DOMINOS',designation:'Tapis de course T520B Confort, 13 km/h, 43x121cm' ,quantite : 18 ,prixUnitaire : 120 , valeur : 2160},
      { codeArticle:'SEGWAY',designation:'Trottinette électrique Ninebot F2 Plus' ,quantite : 5 ,prixUnitaire : 80 , valeur : 400  },
      { codeArticle:'WISPEED',designation:'Trottinette électrique Enfant Wispeed T650 Navy Blue' ,quantite : 8 ,prixUnitaire : 100 , valeur : 800  },
    ]
  }

]
