import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit{
  listaProdutos: Produto[] = [];

  @Input() title = 'Como gostaria de manejar os produtos?';
  @Input() produto: Produto = {
    id: 'teste',
    categoria: 'categoria teste',
    nome: 'nome teste'
  }

  constructor(private produtoService: ProdutoService){}

  ngOnInit():void {
    this.produtoService.listar().subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
    })
  }

}
