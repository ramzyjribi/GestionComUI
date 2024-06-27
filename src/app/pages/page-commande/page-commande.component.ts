import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CommandeService} from "../../services/commande.service";
import {Commande} from "../../models/commande";

@Component({
  selector: 'app-page-commande',
  templateUrl: './page-commande.component.html',
  styleUrl: './page-commande.component.scss'
})
export class PageCommandeComponent {
  listCommandes : Commande[] = this.CommandeService.commandes;
  constructor(private router: Router , private CommandeService : CommandeService) {
  }

  onClick() {
    this.router.navigateByUrl("/newcommande")
  }
}
