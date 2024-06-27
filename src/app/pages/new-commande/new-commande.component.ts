import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbDateStruct, NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {debounceTime, distinctUntilChanged, filter, map, merge, Observable, OperatorFunction, Subject, tap} from "rxjs";
import {ClientFournisseur} from "../../models/ClientFournisseur";
import {ClientService} from "../../services/client-service.service";
import {ArticleDto} from "../../models/article-dto";
import {ArticleServiceService} from "../../services/article-service.service";
import {CommandeService} from "../../services/commande.service";
import {Router} from "@angular/router";
import {LigneCommande} from "../../models/ligne-commande";
import {Commande} from "../../models/commande";

@Component({
  selector: 'app-new-commande',
  templateUrl: './new-commande.component.html',
  styleUrl: './new-commande.component.scss'
})
export class NewCommandeComponent implements OnInit{
  show = false;
  numCommande! : string;
  clients! : ClientFournisseur[] ;
  articles! : ArticleDto[];
  codeCommande!: string;
  currentClient: ClientFournisseur | undefined;

  modeldate!: NgbDateStruct | undefined;
  model: any;
  modelArticle : any;
  commande! : Commande;
  ligneCommande : LigneCommande = {} ;
  detailcommande : LigneCommande[] = [] ;
  codeArticle! : string  ;
  prixUnitaire! : number;
  quantite: any;
  somme : number = 0;
  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
  @ViewChild('instancearticle', { static: true }) instanceArticle!: NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  focusArticle$ = new Subject<string>();
  clickArticle$ = new Subject<string>();

  constructor(private clientsercice : ClientService , private articleservice : ArticleServiceService
              , private commandeService : CommandeService, private router: Router) {
  }

  ngOnInit(): void {
    this.clients = this.clientsercice.getAllClient();
    this.articles = this.articleservice.articles;
    console.log(this.commandeService.commandes);
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;


    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === '' ? this.clients.map(c=>c.nom+' '+c.prenom) : this.clients.map(c => c.nom+' '+c.prenom).filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
      )
    );
  };

  searchArticle: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.clickArticle$.pipe(filter(() => !this.instanceArticle.isPopupOpen()));
    const inputFocus$ = this.focusArticle$;


    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === '' ? this.articles.map(c=>c.codeArticle+' '+c.designation) : this.articles.map(c => c.codeArticle+' '+c.designation).filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
      )
    );
  };



  getClientByName(name: string): ClientFournisseur | undefined {
    return this.clients.find(c => (c.nom+' '+c.prenom).toLowerCase() == name.toLowerCase());
  }

  getArticleByName(name : string) : ArticleDto | undefined{
    return this.articles.find(c => (c.codeArticle+' '+c.designation).toLowerCase() == name.toLowerCase());
  }

  Onblur() {
    this.currentClient = this.getClientByName(this.model);
    console.log(this.currentClient);
  }

  addLigneCommade() {
    //console.log(this.ligneCommande)
    this.ligneCommande.codeArticle = this.getArticleByName(this.modelArticle)?.codeArticle;
    this.ligneCommande.designation = this.getArticleByName(this.modelArticle)?.designation;
    if (this.ligneCommande.quantite && this.ligneCommande.prixUnitaire)
    this.ligneCommande.valeur = this.ligneCommande.quantite * this.ligneCommande.prixUnitaire;
    this.detailcommande.push({...this.ligneCommande});
    this.somme = this.calculTotal();
    this.ligneCommande={};
    this.modelArticle = undefined;
  }

  delateLigneArticle(codeArticle: string | undefined) {
    //console.log(codeArticle);
    let index = this.detailcommande.findIndex(e => e.codeArticle == codeArticle);
    //console.log(index);
    this.detailcommande.splice(index,1);
    this.somme = this.calculTotal();
  }

  calculTotal() {
    let somme : number = 0;
    this.detailcommande.forEach(ligneCommande => { somme += ligneCommande.valeur || 0; });
    return somme;
  }

  enregistrer() {
    // @ts-ignore
    this.commande = {
      ...this.currentClient,
      codeCommande: this.codeCommande,
      date: this.modeldate,
      total: this.somme,
      articles: [...this.detailcommande]
    }
    this.numCommande = this.codeCommande;
    this.show = true;
    console.log(this.commande);
    this.commandeService.commandes.push(this.commande);
    console.log(this.commandeService.commandes);
    this.reset();
  }
   reset() :void {
     this.ligneCommande={};
     this.modelArticle = undefined;
     this.model = undefined;
     this.somme = 0 ;
     this.codeCommande = '';
     this.modeldate = undefined;
     this.currentClient = undefined;
     this.detailcommande = [];
   }
}
