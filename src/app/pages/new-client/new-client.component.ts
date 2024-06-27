import { Component } from '@angular/core';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss'
})
export class NewClientComponent {
  imgUrl: string | ArrayBuffer = 'assets/person.png';

  onFileInput(files: FileList | null) {

  }
}
