import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit{
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
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.buscarPorId(id!).subscribe((cliente) => {
      this.cliente = cliente
    })
  }

  editarCliente(){
    this.clienteService.editar(this.cliente).subscribe(() =>{
      this.router.navigate(['/auth/clientes'])
    })
  }

  cancelar() {
    this.router.navigate(['/auth/clientes'])
  }

}
