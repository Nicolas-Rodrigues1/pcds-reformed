import { Component, OnInit } from '@angular/core';
import { ListarClientesModalComponent } from './listar-clientes-modal/listar-clientes-modal/listar-clientes-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from 'src/app/autenticacao/clientes/cliente.service';
import { Cliente } from 'src/app/autenticacao/clientes/cliente';

@Component({
  selector: 'app-pedido-venda',
  templateUrl: './pedido-venda.component.html',
  styleUrls: ['./pedido-venda.component.scss']
})
export class PedidoVendaComponent implements OnInit{
  clienteSelecionado: Cliente | null = null;

  constructor(
    private dialog: MatDialog,
    private clienteService: ClienteService
  ){}

  ngOnInit(): void {
    this.clienteService.clienteSelecionado$.subscribe(cliente => {
      this.clienteSelecionado = cliente;
      // console.log(cliente)
    });
  }

  openDialog(){
    this.dialog.open(ListarClientesModalComponent,{
      width: '50%'
    });
  }



}
