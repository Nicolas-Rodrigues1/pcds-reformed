import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/autenticacao/clientes/cliente';
import { ClienteService } from 'src/app/autenticacao/clientes/cliente.service';

@Component({
  selector: 'app-listar-clientes-modal',
  templateUrl: './listar-clientes-modal.component.html',
  styleUrls: ['./listar-clientes-modal.component.scss']
})
export class ListarClientesModalComponent implements OnInit{
  listaClientes: Cliente[] = [];

  @Input() cliente: Cliente = {
    id: '',
    nome: 'teste',
    nascimento: '',
    cpf: '',
    cep: '',
    telefone: '',
    email: '',
    genero: ''
  }

  constructor(
    private clienteService: ClienteService
  ){}
  
  ngOnInit(): void {
    this.clienteService.listar().subscribe((listaClientes) =>{
      this.listaClientes = listaClientes
    })
  }

  selecionarCliente(cliente: Cliente){
    this.clienteService.selecionarCliente(cliente)
    // console.log(cliente)
  }

}
