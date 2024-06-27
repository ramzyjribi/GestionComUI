import { Component, OnInit } from '@angular/core';
import { ArticleDto } from '../../models/article-dto';
import { CategoryDto } from '../../models/categorie-dto';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.scss'
})
export class NewArticleComponent implements OnInit {
  ngOnInit(): void {
    this.categorieDto.id = null;
  }
  imgUrl: string | ArrayBuffer = 'assets/product.png';
  articleDto: ArticleDto = {};
  categorieDto: CategoryDto = {};
  listeCategorie: Array<CategoryDto> = [
    {
      id:1,
      code: 'Sport',
      designation :'Sport-trotinette'
  },
  {
    id:2,
    code: 'Sport',
      designation :'Sport-velo'
  },
  {
    id : 3,
    code :'jouet',
    designation : 'jouet-voitures'

  }

];


  onFileInput(files: FileList | null): void {

}
}
