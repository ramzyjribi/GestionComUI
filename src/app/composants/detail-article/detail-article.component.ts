import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleDto } from '../../models/article-dto';

import { ArticleServiceService } from '../../services/article-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss'
})
export class DetailArticleComponent {

  @Input()
  articleDto: ArticleDto = {};
  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private articleService: ArticleServiceService
  ) { }

  modifierArticle(): void {
    this.router.navigate(['newarticle', this.articleDto]);
  }


}
