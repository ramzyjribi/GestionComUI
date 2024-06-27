import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageArticleComponent } from './pages/page-article/page-article.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { PageMtvskComponent } from './pages/page-mtvsk/page-mtvsk.component';
import {PageClientComponent} from "./pages/page-client/page-client.component";
import {NewClientComponent} from "./pages/new-client/new-client.component";
import {PageCommandeComponent} from "./pages/page-commande/page-commande.component";
import {NewCommandeComponent} from "./pages/new-commande/new-commande.component";
import {PageCommandeSelectComponent} from "./pages/page-commande-select/page-commande-select.component";

const routes: Routes = [

  {path:"login",component:PageLoginComponent},
  {path:"inscrire",component:PageInscriptionComponent},
  {path:'',component:PageDashboardComponent,
   children: [
    {path: 'articles',component: PageArticleComponent},
    {path:'newarticle',component:NewArticleComponent},
    {path:'mvtstk',component:PageMtvskComponent},
    {path:'clients',component:PageClientComponent},
     {path:'newclient',component :NewClientComponent },
     {path:'commandesclient',component:PageCommandeComponent},
     {path:'newcommande',component:NewCommandeComponent},
     {path:'commande/:code',component:PageCommandeSelectComponent}
   ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
