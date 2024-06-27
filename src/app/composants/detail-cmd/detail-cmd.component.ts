import {Component, Input} from '@angular/core';
import {LigneCommande} from "../../models/ligne-commande";

@Component({
  selector: 'app-detail-cmd',
  templateUrl: './detail-cmd.component.html',
  styleUrl: './detail-cmd.component.scss'
})
export class DetailCmdComponent {
  @Input() detailCmd: LigneCommande = {};

}
