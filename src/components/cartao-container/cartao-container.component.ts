import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cartao-container',
  templateUrl: './cartao-container.component.html',
  styleUrls: ['./cartao-container.component.scss']
})
export class CartaoContainerComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;

  constructor() { }

  ngOnInit(): void {}

}
