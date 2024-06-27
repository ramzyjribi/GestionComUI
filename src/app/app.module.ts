import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BoutonsGroupeComponent } from './composants/boutons-groupe/boutons-groupe.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { FormsModule } from '@angular/forms';
import { PageMtvskComponent } from './pages/page-mtvsk/page-mtvsk.component';
import { AppDetailMvtArticleComponent } from './composants/detail-mvt-article/detail-mvt-article.component';
import { AppDetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { provideHttpClient } from '@angular/common/http';
import { DetailClientFournisseurComponent } from './composants/detail-client-fournisseur/detail-client-fournisseur.component';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { DetailCmdClientFournisseurComponent } from './composants/detail-cmd-client-fournisseur/detail-cmd-client-fournisseur.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCommandeComponent } from './pages/page-commande/page-commande.component';
import { NewCommandeComponent } from './pages/new-commande/new-commande.component';
import { PageCommandeSelectComponent } from './pages/page-commande-select/page-commande-select.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonsGroupeComponent,
    NewArticleComponent,
    PageMtvskComponent,
    AppDetailMvtArticleComponent,
    AppDetailMvtStkComponent,
    DetailClientFournisseurComponent,
    PageClientComponent,
    NewClientComponent,
    DetailCmdClientFournisseurComponent,
    DetailCmdComponent,
    PageCommandeComponent,
    NewCommandeComponent,
    PageCommandeSelectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbToastModule,

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
