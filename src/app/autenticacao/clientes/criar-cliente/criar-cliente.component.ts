import { Component } from '@angular/core';
import { Cliente, Clientelogin } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.scss']
})
export class CriarClienteComponent{

  cliente: Cliente = {
    id: 0,
    nome: '',
    nascimento: '',
    cpf: '',
    cep: '',
    telefone: '',
    email: '',
    genero: ''
  }

  clienteLogin: Clientelogin = {
    id: 0,
    email: '',
    senha: '123'
  }

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private mensagemService: MensagemService
  ){
    this.gerarId();
  }

  criarCliente(){
    this.clienteService.criar(this.cliente).subscribe((clienteCriado)=>{
      this.clienteLogin.id = clienteCriado.id;
      this.criarLoginCliente();
      this.router.navigate(['/auth/clientes'])
    })
    const mensagemClienteCriado = 'Cliente criado com sucesso'
    this.mensagemService.openSnackBar(mensagemClienteCriado)
  }

  criarLoginCliente(){
    this.clienteService.criarLogin(this.cliente.email, this.clienteLogin.senha).subscribe(() =>{
      // console.log(this.cliente.email)
      // console.log(this.clienteLogin.senha)
      // console.log('id cliente logn',this.clienteLogin.id)
    })
  }

  cancelar(){
    this.router.navigate(['/auth/clientes'])
  }

  gerarId(): void {
    if (this.cliente.id === 0) {
      this.cliente.id = Math.floor(Math.random() * 1000000000);
    }
  }
}
