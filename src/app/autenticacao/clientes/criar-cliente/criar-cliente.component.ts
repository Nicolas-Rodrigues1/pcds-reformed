import { Component } from '@angular/core';
import { Cliente } from '../cliente';
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
    private router: Router,
    private mensagemService: MensagemService
  ){}

  criarCliente(){
    this.clienteService.criar(this.cliente).subscribe(()=>{
      this.router.navigate(['/auth/clientes'])
    })
    const mensagemClienteCriado = 'Cliente criado com sucesso'
    this.mensagemService.openSnackBar(mensagemClienteCriado)
  }

  cancelar(){
    this.router.navigate(['/auth/clientes'])
  }
}
