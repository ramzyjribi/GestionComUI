import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent  {

  constructor(private router:Router){

  }
  
navigate(url?: string) {
  this.router.navigate([url]);
}
  

  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'bi bi-speedometer2',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'bi bi-file-earmark-bar-graph',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'bi bi-graph-down-arrow',
        url: 'statistiques'
      }
    ]
  },
    {
      id: '2',
      titre: 'Articles',
      icon: 'bi bi-box-seam',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'bi-box-seam',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'fab bi bi-boxes',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'bi bi-person',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'bi bi-person',
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'bi bi-receipt',
          url: 'commandesclient'
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'bi bi-people',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'bi bi-people',
          url: 'fournisseurs'
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'bi bi-receipt-cutoff',
          url: 'commandesfournisseur'
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'bi bi-gear',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'bi bi-bookmarks',
          url: 'categories'
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'bi bi-person-gear',
          url: 'utilisateurs'
        }
      ]
    }
  ];

}
