import {Component, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-boutons-groupe',
  templateUrl: './boutons-groupe.component.html',
  styleUrl: './boutons-groupe.component.scss'
})
export class BoutonsGroupeComponent {
  @Output()
  clickEvent = new EventEmitter();

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }


}
