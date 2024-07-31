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
  listaClientesFiltrados: Cliente[] = []
  nomeDigitado: string = '';
  page: number = 1;
  pageSize: number = 6;

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
    this.listarClientes()
  }

  listarClientes(){
    this.clienteService.listar(this.page, this.pageSize).subscribe((listaClientes) =>{
      this.listaClientes = listaClientes
      this.listaClientesFiltrados = listaClientes
    })
  }

  onSearchChange(event: any){
    this.nomeDigitado = event.target.value.toLowerCase();
    this.filtrarClientes();
  }

  filtrarClientes(): void {
    if (!this.nomeDigitado) {
      this.listaClientesFiltrados = this.listaClientes; // Se o campo de busca estiver vazio, mostra todos os clientes
    } else {
      this.listaClientesFiltrados = this.listaClientes.filter(cliente => 
        cliente.nome.toLowerCase().includes(this.nomeDigitado)
      );
    }
  }

  selecionarCliente(cliente: Cliente){
    this.clienteService.selecionarCliente(cliente)
    // console.log(cliente)
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
