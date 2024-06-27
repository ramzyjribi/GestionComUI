import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../../services/article-service.service';
import { ArticleDto } from '../../models/article-dto';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent implements OnInit {
  listArticle: Array<ArticleDto> = this.articleService.articles;
  constructor(
    private articleService : ArticleServiceService, private router: Router
  ) { }
  ngOnInit(): void {
    console.log(this.listArticle);
  }


    protected readonly onclick = onclick;

  onClick() {
    this.router.navigateByUrl("/newarticle")
  }
}
