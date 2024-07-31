import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit{
  listaClientes: Cliente[] = [];

  constructor(private clienteService: ClienteService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}
