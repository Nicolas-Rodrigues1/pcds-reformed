import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/autenticacao/produtos/produto';
import { ProdutoService } from 'src/app/autenticacao/produtos/produto.service';

@Component({
  selector: 'app-confirmar-pedido-modal',
  templateUrl: './confirmar-pedido-modal.component.html',
  styleUrls: ['./confirmar-pedido-modal.component.scss']
})
export class ConfirmarPedidoModalComponent implements OnInit{
  produtoSelecionado: Produto | null = null;

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.produtoService.produtoSelecionado$.subscribe(produto => {
      this.produtoSelecionado = produto;
      console.log(this.produtoSelecionado)
    })
  }

}
