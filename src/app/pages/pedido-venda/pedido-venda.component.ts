import { Component, OnInit } from '@angular/core';
import { ListarClientesModalComponent } from './listar-clientes-modal/listar-clientes-modal/listar-clientes-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from 'src/app/autenticacao/clientes/cliente.service';
import { Cliente } from 'src/app/autenticacao/clientes/cliente';
import { ProdutoService } from 'src/app/autenticacao/produtos/produto.service';
import { Produto } from 'src/app/autenticacao/produtos/produto';
import { Pedido } from './pedido';
import { ConfirmarPedidoModalComponent } from './confirmar-pedido-modal/confirmar-pedido-modal.component';
import { PedidoService } from './pedido.service';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-pedido-venda',
  templateUrl: './pedido-venda.component.html',
  styleUrls: ['./pedido-venda.component.scss']
})
export class PedidoVendaComponent implements OnInit{
  clienteSelecionado: Cliente | null = null;
  produtoSelecionado: Produto | null = null;
  status = 'Pendente';
  idPedido = 1;

  listaProdutosCarrinho: Produto[] = []
  listaProdutos: Produto[] = [];
  listaPedidos: Pedido[] = []
  produtosFiltrados: Produto[] = [];
  categoriaSelecionada = '';
  page = 1;
  pageSize = 12;

  constructor(
    private dialog: MatDialog,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private pedidoService: PedidoService,
    private mensagemService: MensagemService
  ){}

  ngOnInit(): void {
    this.clienteService.clienteSelecionado$.subscribe(cliente => {
      this.clienteSelecionado = cliente;
      if(cliente){
        this.listarProdutos();
      }
      // console.log(cliente)
    });
  }

  selecionarProduto(produto: Produto){
    this.produtoSelecionado = produto;
    // console.log(produto)
    this.modalConfirmarPedido()
  }

  openDialog(){
    this.dialog.open(ListarClientesModalComponent,{
      width: '50%'
    });
  }

  modalConfirmarPedido() {
    const dialogRef = this.dialog.open(ConfirmarPedidoModalComponent, {
      width: '50%',
      data: { produto: this.produtoSelecionado }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirmar') {
        this.adicionarProdutoCarrinho();
      }
    });
  }
  
  listarProdutos(){
    this.produtoService.listar(this.page, this.pageSize).subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
      this.filtrarProdutos()
      // console.log(this.produtosFiltrados)
      // console.log(listaProdutos)
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

  onCategoriaChange(event: any): void{
    this.categoriaSelecionada = event.target.value;
    // console.log(event)
    this.filtrarProdutos();
  }

  filtrarProdutos(){
    if (this.categoriaSelecionada) {
      this.produtosFiltrados = this.listaProdutos.filter(produto => produto.categoria === this.categoriaSelecionada);
    } else {
      this.produtosFiltrados = [...this.listaProdutos];
    }
  }

  adicionarProdutoCarrinho(){
    if(this.produtoSelecionado){
      this.listaProdutosCarrinho.push(this.produtoSelecionado);
      this.mensagemService.openSnackBar('Produto adicionado ao carrinho')
    }
  }

  removerProduto(produto: Produto){
    const index = this.listaProdutosCarrinho.findIndex(p => p.id === produto.id)
    this.listaProdutosCarrinho.splice(index, 1)
  }


  realizarPedido(){
    console.log(this.clienteSelecionado)
    console.log(this.produtoSelecionado)
    if(this.clienteSelecionado && this.produtoSelecionado){
      const novoPedido: Pedido = {
        idPedido: this.idPedido++,
        status: this.status,
        cliente: this.clienteSelecionado,
        produto: this.listaProdutosCarrinho
      };

      this.pedidoService.criarPedido(novoPedido).subscribe(() => {
        this.mensagemService.openSnackBar('Pedido realizado com sucesso')
      })
    }
    this.listaProdutosCarrinho = []
  }

}
