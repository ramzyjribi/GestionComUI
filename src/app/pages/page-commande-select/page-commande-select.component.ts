import { Component } from '@angular/core';
import {Commande} from "../../models/commande";
import {ActivatedRoute} from "@angular/router";
import {CommandeService} from "../../services/commande.service";

@Component({
  selector: 'app-page-commande-select',
  templateUrl: './page-commande-select.component.html',
  styleUrl: './page-commande-select.component.scss'
})
export class PageCommandeSelectComponent {
  CodeCmd! : string | null;
  commande! : Commande | undefined;
  constructor(private route: ActivatedRoute , private commadeService : CommandeService) {}

  ngOnInit() {
    this.CodeCmd = this.route.snapshot.paramMap.get('code');
    if (this.CodeCmd) {
      this.commande = this.commadeService.commandes.find(c => c.codeCommande == this.CodeCmd);
    }
  }

}
