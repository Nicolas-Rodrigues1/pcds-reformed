import { Component, OnInit } from '@angular/core';
import { ListarClientesModalComponent } from './listar-clientes-modal/listar-clientes-modal/listar-clientes-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from 'src/app/autenticacao/clientes/cliente.service';
import { Cliente } from 'src/app/autenticacao/clientes/cliente';
import { ProdutoService } from 'src/app/autenticacao/produtos/produto.service';
import { Produto } from 'src/app/autenticacao/produtos/produto';

@Component({
  selector: 'app-pedido-venda',
  templateUrl: './pedido-venda.component.html',
  styleUrls: ['./pedido-venda.component.scss']
})
export class PedidoVendaComponent implements OnInit{
  clienteSelecionado: Cliente | null = null;

  listaProdutos: Produto[] = [];
  page: number = 1;
  pageSize: number = 12;

  constructor(
    private dialog: MatDialog,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
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

  openDialog(){
    this.dialog.open(ListarClientesModalComponent,{
      width: '50%'
    });
  }

  listarProdutos(){
    this.produtoService.listar(this.page, this.pageSize).subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
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

}
