import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { PageMtvskComponent } from './page-mtvsk/page-mtvsk.component';

const routes: Routes = [
  
  {path:"login",component:PageLoginComponent},
  {path:"inscrire",component:PageInscriptionComponent},
  {path:'',component:PageDashboardComponent,
   children: [
    {path: 'articles',component: PageArticleComponent},
    {path:'newarticle',component:NewArticleComponent},
    {path:'mvtstk',component:PageMtvskComponent}
   ]
  }
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
