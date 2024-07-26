import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.scss']
})
export class CriarClienteComponent implements OnInit{

  cliente: Cliente = {
    id: '',
    nome: '',
    nascimento: '',
    cpf: '',
    cep: '',
    telefone: '',
    email: '',
    genero: ''
  }

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  criarCliente(){
    this.clienteService.criar(this.cliente).subscribe(()=>{
      this.router.navigate(['/auth/clientes'])
    })
  }

  cancelar(){
    this.router.navigate(['/auth/clientes'])
  }
}
