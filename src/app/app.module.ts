import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BoutonsGroupeComponent } from './composants/boutons-groupe/boutons-groupe.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { FormsModule } from '@angular/forms';
import { PageMtvskComponent } from './page-mtvsk/page-mtvsk.component';
import { AppDetailMvtArticleComponent } from './composants/app-detail-mvt-article/app-detail-mvt-article.component';
import { AppDetailMvtStkComponent } from './composants/app-detail-mvt-stk/app-detail-mvt-stk.component';
import { provideHttpClient } from '@angular/common/http';


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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
