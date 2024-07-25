import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit{

  @Input() produto: Produto = {
    id: 0,
    categoria: 'categoria teste',
    nome: 'nome teste'
  }

  constructor(){}

  ngOnInit():void {
  }

}
