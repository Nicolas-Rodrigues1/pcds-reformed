import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from 'src/app/autenticacao/produtos/produto';

@Component({
  selector: 'app-confirmar-pedido-modal',
  templateUrl: './confirmar-pedido-modal.component.html',
  styleUrls: ['./confirmar-pedido-modal.component.scss']
})
export class ConfirmarPedidoModalComponent {
  produtoSelecionado: Produto;

  constructor(
    public dialogRef: MatDialogRef<ConfirmarPedidoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { produto: Produto }
  ) {
    this.produtoSelecionado = data.produto;
  }

  confirmar(): void {
    this.dialogRef.close('confirmar');
  }

  cancelar(): void {
    this.dialogRef.close('cancelar');
  }
}
