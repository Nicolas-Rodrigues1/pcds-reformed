/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../pedido-venda/pedido';
import { PedidoService } from '../pedido-venda/pedido.service';
import { Produto } from 'src/app/autenticacao/produtos/produto';
import { ProdutoService } from 'src/app/autenticacao/produtos/produto.service';

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html',
  styleUrls: ['./listar-vendas.component.scss']
})
export class ListarVendasComponent implements OnInit{
  listaPedidos: Pedido[] = []
  produtos: Produto[] = []

  @Input() title = 'Essas são seus pedidos'
  @Input() pedido: Pedido = {
    idPedido: 0,
    status: '',
    cliente: 0,
    produto: []
  }

  @Input() produto: Produto = {
    id: 0,
    nome: '',
    categoria: ''
  }

  constructor(
    private pedidoService: PedidoService,
    private produtoService: ProdutoService
  ){}
  
  ngOnInit(): void {
    this.pedidoService.listarPedidos().subscribe((listaPedidos) => {
      this.listaPedidos = listaPedidos
    })

    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos
    })
  }

  getProdutoNome(produtoId: number): string{
    const produto = this.produtos.find(p => p.id === produtoId)
    return produto ? produto.nome : 'Produto não encontrado';
  }

}
