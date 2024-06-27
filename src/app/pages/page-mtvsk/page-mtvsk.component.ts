import { Component } from '@angular/core';
import {ArticleServiceService} from "../../services/article-service.service";
import {ArticleDto} from "../../models/article-dto";

@Component({
  selector: 'app-page-mtvsk',
  templateUrl: './page-mtvsk.component.html',
  styleUrl: './page-mtvsk.component.scss'
})
export class PageMtvskComponent {

  listArticle: Array<ArticleDto> = this.articleService.articles;
  selectedArticle: ArticleDto = {};
  addition = true;
  valeur : number = 0 ;
  constructor(private articleService : ArticleServiceService) {
  }


  correction(article: ArticleDto) {
    this.selectedArticle = article;
  }

  enregistere() {
    if (this.addition) {

      console.log(this.selectedArticle.stock);
      console.log(this.valeur);
      // @ts-ignore
      this.selectedArticle.stock = this.selectedArticle.stock + this.valeur
      this.valeur = 0;
      console.log(this.selectedArticle.stock);
    }
    else {
      // @ts-ignore
      this.selectedArticle.stock = this.selectedArticle.stock - this.valeur
    }
  }
}
