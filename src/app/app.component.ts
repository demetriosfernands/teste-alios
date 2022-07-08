import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cpf:string = '13591682730';
  showSituacao:boolean = false;

  buscarCPF() {

    this.showSituacao = false;

    if (this.cpf === '13591682730') {
      this.showSituacao = true;
    }
  }
}
