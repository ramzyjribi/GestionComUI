import {Component, Input} from '@angular/core';
import {ArticleDto} from "../../models/article-dto";
import {Mouvement} from "../../models/mouvement";

@Component({
  selector: 'app-app-detail-mvt-stk',
  templateUrl: './detail-mvt-stk.component.html',
  styleUrl: './detail-mvt-stk.component.scss'
})
export class AppDetailMvtStkComponent {
  @Input()
  mouvement: Mouvement = {};
}
