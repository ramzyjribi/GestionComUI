import {Component, Input} from '@angular/core';
import {Commande} from "../../models/commande";


@Component({
  selector: 'app-detail-cmd-client-fournisseur',
  templateUrl: './detail-cmd-client-fournisseur.component.html',
  styleUrl: './detail-cmd-client-fournisseur.component.scss'
})
export class DetailCmdClientFournisseurComponent {
  @Input() commande! : Commande;

}
