import {Component, OnInit} from '@angular/core';
import {ClientFournisseur} from "../../models/ClientFournisseur";
import {ClientService} from "../../services/client-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent implements OnInit{
  clients : ClientFournisseur[] = [];
  constructor(private clientService : ClientService, private router: Router) {
  }
  ngOnInit(): void {
    this.clients = this.clientService.getAllClient();
  }

  onClick() {
    this.router.navigateByUrl("/newclient")
  }
}
