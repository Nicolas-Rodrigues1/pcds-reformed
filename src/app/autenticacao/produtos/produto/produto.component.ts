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
  page: number = 1;
  pageSize: number = 12;

  @Input() title = 'Como gostaria de manejar os produtos?';
  @Input() produto: Produto = {
    id: '',
    categoria: '',
    nome: ''
  }

  constructor(private produtoService: ProdutoService){}

  ngOnInit():void {
    this.listarProdutos();
  }

  listarProdutos(): void{
    this.produtoService.listar(this.page, this.pageSize).subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
    })  
  }

  proximaPagina(): void{
    this.page++;
    this.listarProdutos();
  }

  paginaAnterior(): void{
    if (this.page > 1) {
      this.page--;
      this.listarProdutos();
    }
  }
}
