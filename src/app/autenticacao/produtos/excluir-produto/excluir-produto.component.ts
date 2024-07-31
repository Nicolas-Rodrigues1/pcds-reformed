import { Component, Inject } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.scss']
})
export class ExcluirProdutoComponent{

  produto: Produto = {
    id: '',
    nome: '',
    categoria: ''
  }

  constructor(
    private produtoService: ProdutoService,
    public dialogRef: MatDialogRef<ExcluirProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {produto: Produto}
  ){
    this.produto = data.produto
  }

  excluirProduto(){
    this.produtoService.excluir(this.produto.id!).subscribe(() => {
      this.dialogRef.close('excluido')
    })
  }

  cancelar(){
    this.dialogRef.close()
  }

}
