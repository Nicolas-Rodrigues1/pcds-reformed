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
  page: number = 1;
  pageSize: number = 8;

  @Input() title = 'Como gostaria de manejar os clientes?'
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
    this.listarClientes();
  }

  listarClientes(): void{
    this.clienteService.listar(this.page, this.pageSize).subscribe((listaClientes) =>{
      this.listaClientes = listaClientes
    })
  }

  proximaPagina(): void{
    this.page++;
    this.listarClientes();
  }

  paginaAnterior(): void{
    if (this.page > 1) {
      this.page--;
      this.listarClientes();
    }
  }
}
