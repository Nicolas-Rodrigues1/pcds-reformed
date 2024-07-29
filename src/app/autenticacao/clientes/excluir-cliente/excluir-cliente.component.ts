import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.scss']
})
export class ExcluirClienteComponent implements OnInit{
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
    private route: ActivatedRoute,
    private mensagemService: MensagemService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.buscarPorId(id!).subscribe((cliente) => {
      this.cliente = cliente;
    })
  }

  excluirCliente(){
    if(this.cliente.id){
      this.clienteService.excluir(this.cliente.id).subscribe(() =>{
        this.router.navigate(['/auth/clientes'])
      })
      const mensagemClienteExcluido = 'Cliente excluído com sucesso'
      this.mensagemService.openSnackBar(mensagemClienteExcluido)
    }
  }

  cancelar(){
    this.router.navigate(['/auth/clientes'])
  }


}
