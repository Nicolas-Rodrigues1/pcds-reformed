import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{
  listaClientes: Cliente[] = [];

  @Input() title = 'Como gostaria de manejar os produtos?'
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

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
    this.clienteService.listar().subscribe((listaClientes) =>{
      this.listaClientes = listaClientes
    })
  }
}
