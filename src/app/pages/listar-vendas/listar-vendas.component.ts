/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../pedido-venda/pedido';
import { PedidoService } from '../pedido-venda/pedido.service';
import { Produto } from 'src/app/autenticacao/produtos/produto';

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html',
  styleUrls: ['./listar-vendas.component.scss']
})
export class ListarVendasComponent implements OnInit{
  listaPedidos: Pedido[] = []

  @Input() title = 'Essas são seus pedidos'
  @Input() pedido: Pedido = {
    idPedido: 0,
    status: '',
    cliente: 0,
    produto: []
  }

  @Input() produto: Produto = {
    id: 0,
    nome: 'abc',
    categoria: ''
  }

  constructor(
    private pedidoService: PedidoService
  ){}
  
  ngOnInit(): void {
    this.pedidoService.listarPedidos().subscribe((listaPedidos) => {
      this.listaPedidos = listaPedidos
    })
  }
}
