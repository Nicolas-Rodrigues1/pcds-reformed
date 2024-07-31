import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirProdutoComponent } from '../excluir-produto/excluir-produto.component';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit{
  listaProdutos: Produto[] = [];
  produtoSelecionado: Produto | null = null;
  page = 1;
  pageSize = 12;

  @Input() title = 'Como gostaria de manejar os produtos?';
  @Input() produto: Produto = {
    id: '',
    categoria: '',
    nome: ''
  }

  constructor(
    private produtoService: ProdutoService,
    private dialog: MatDialog,
    private mensagemService: MensagemService
  ){}

  ngOnInit():void {
    this.listarProdutos();
  }

  listarProdutos(): void{
    this.produtoService.listar(this.page, this.pageSize).subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
    })  
  }

  selecionarProduto(produto: Produto){
    this.produtoSelecionado = produto
  }

  openExcluir(){
    const dialogRef = this.dialog.open(ExcluirProdutoComponent, {
      width: '50%',
      data: { produto: this.produtoSelecionado }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'excluido'){
        this.mensagemService.openSnackBar('Produto excluído com sucesso')
        this.listarProdutos()
      }
    })
  }

  openEditar(){

    const dialogRef = this.dialog.open(EditarProdutoComponent,{
      width: '50%',
      data: { produto: this.produtoSelecionado }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'editado'){
        this.mensagemService.openSnackBar('Produto editado com sucesso')
      }
    })
  }

  proximaPagina(): void{
    this.page++;
    this.listarProdutos();
  }

  paginaAnterior(): void{
    if (this.page > 1) {
      this.page--;
      this.listarProdutos();
    }
  }
}
