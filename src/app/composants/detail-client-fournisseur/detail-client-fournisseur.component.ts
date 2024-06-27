import {Component, Input} from '@angular/core';
import {ClientFournisseur} from "../../models/ClientFournisseur";

@Component({
  selector: 'app-detail-client-fournisseur',
  templateUrl: './detail-client-fournisseur.component.html',
  styleUrl: './detail-client-fournisseur.component.scss'
})
export class DetailClientFournisseurComponent {

  @Input() client! : ClientFournisseur;

  modifierClient() {

  }
}
