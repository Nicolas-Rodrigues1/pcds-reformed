import { Component, Inject, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExcluirProdutoComponent } from '../excluir-produto/excluir-produto.component';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent{
  
  produto: Produto = {
    id: '',
    categoria: '',
    nome: ''
  }
  
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ExcluirProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {produto: Produto}
  ){
    this.produto = data.produto
  }

  editarProduto(){
    this.produtoService.editar(this.produto).subscribe(() => {
      this.dialogRef.close('editado')
    })
  }

  cancelar() {
    this.dialogRef.close()
  }

}
