import { Component, Inject, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { ExcluirClienteComponent } from '../excluir-cliente/excluir-cliente.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from '../../produtos/produto';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent{
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
    public dialogRef: MatDialogRef<ExcluirClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {cliente: Cliente}
  ){
    this.cliente = data.cliente
  }

  ngOnInit(): void {
  }

  editarCliente(){
    this.clienteService.editar(this.cliente).subscribe(() => {
      this.dialogRef.close('editado')
    })
  }

  cancelar() {
    this.dialogRef.close()
  }

}
