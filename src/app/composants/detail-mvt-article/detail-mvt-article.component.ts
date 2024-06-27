import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ArticleDto} from "../../models/article-dto";

@Component({
  selector: 'detail-mvt-article',
  templateUrl: './detail-mvt-article.component.html',
  styleUrl: './detail-mvt-article.component.scss'
})
export class AppDetailMvtArticleComponent {
  @Input()
  articleDto: ArticleDto = {};
  @Output()
  correctionStock = new EventEmitter();

  onClick() {
    this.correctionStock.emit();
  }
}
