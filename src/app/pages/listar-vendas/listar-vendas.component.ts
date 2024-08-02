/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../pedido-venda/pedido';
import { PedidoService } from '../pedido-venda/pedido.service';
import { Produto } from 'src/app/autenticacao/produtos/produto';
import { ProdutoService } from 'src/app/autenticacao/produtos/produto.service';
import { EmailService } from 'src/app/core/services/email.service';
import { ClienteService } from 'src/app/autenticacao/clientes/cliente.service';

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html',
  styleUrls: ['./listar-vendas.component.scss']
})
export class ListarVendasComponent implements OnInit{
  listaPedidos: Pedido[] = []
  produtos: Produto[] = []
  emailLogado: string | null = null;
  nomeCliente = '';

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
    private produtoService: ProdutoService,
    private emailService: EmailService,
    private clienteService: ClienteService
  ){}
  
  ngOnInit(): void {
    this.emailService.email$.subscribe(email => {
      this.emailLogado = email;
      
      this.clienteService.getClientePorEmail(this.emailLogado!).subscribe(cliente => {
        this.pedidoService.listarPedidos().subscribe((listaPedidos)=> {
          this.listaPedidos = listaPedidos.filter(pedido => pedido.cliente === cliente.id)
        })
      })
    })
    // console.log(this.emailLogado)

    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos
    })
  }

  getProdutoNome(produtoId: number): string{
    const produto = this.produtos.find(p => p.id === produtoId)
    return produto ? produto.nome : 'Produto não encontrado';
  }

}
