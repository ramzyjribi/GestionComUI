import { Injectable } from '@angular/core';
import {Commande} from "../models/commande";
import {commandeDB} from "../DB/commandeDB";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandes: Commande[] = commandeDB;
  test : string = "test";
  constructor() { }
  getAllCommandes() {
    return this.commandes;
  }

}
