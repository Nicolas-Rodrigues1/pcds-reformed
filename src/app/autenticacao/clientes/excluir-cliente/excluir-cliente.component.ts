import { Component, Inject } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.scss']
})
export class ExcluirClienteComponent{
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

  excluirCliente(){
    this.clienteService.excluir(this.cliente.id).subscribe(() => {
      this.dialogRef.close('excluido')
    })
  }

  cancelar(){
    this.dialogRef.close()
  }


}
