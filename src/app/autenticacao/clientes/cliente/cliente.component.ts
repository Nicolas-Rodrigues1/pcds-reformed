import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { ExcluirClienteComponent } from '../excluir-cliente/excluir-cliente.component';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{
  listaClientes: Cliente[] = [];
  clienteSelecionado: Cliente | null = null;
  page = 1;
  pageSize = 8;

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

  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog,
    private mensagemService: MensagemService
  ){}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void{
    this.clienteService.listar(this.page, this.pageSize).subscribe((listaClientes) =>{
      this.listaClientes = listaClientes
    })
  }

  selecionarCliente(cliente: Cliente){
    this.clienteSelecionado = cliente
  }

  openExcluir(){
    const dialogRef = this.dialog.open(ExcluirClienteComponent, {
      width: '50%',
      data: { cliente: this.clienteSelecionado }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'excluido'){
        this.mensagemService.openSnackBar('Cliente excluído com sucesso')
        this.listarClientes()
      }
    })
  }

  openEditar(){
    const dialogRef = this.dialog.open(EditarClienteComponent,{
      width: '50%',
      data: { cliente: this.clienteSelecionado }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'editado'){
        this.mensagemService.openSnackBar('Cliente editado com sucesso')
      }
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
