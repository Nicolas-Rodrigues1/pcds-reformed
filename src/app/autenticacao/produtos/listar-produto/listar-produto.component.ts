import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit{
  listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.produtoService.listar().subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
    })
  }

}
