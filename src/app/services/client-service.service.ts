import { Injectable } from '@angular/core';
import {ClientFournisseur} from "../models/ClientFournisseur";
import {clientFournisseurDB} from "../DB/ClientFournisseurDB";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client : ClientFournisseur[] = clientFournisseurDB;
  getAllClient() : ClientFournisseur[] {
    return this.client;
  }
  constructor() { }
}
