import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.scss']
})
export class ExcluirProdutoComponent implements OnInit{

  produto: Produto = {
    id: '',
    nome: '',
    categoria: ''
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagemService: MensagemService
  ){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.buscarPorId(id!).subscribe((produto) => {
      this.produto = produto;
    })
  }

  excluirProduto(){
    if(this.produto.id){
      this.produtoService.excluir(this.produto.id).subscribe(() => {
        this.router.navigate(['/auth/produtos'])
      })
      const mensagemProdutoExcluido = 'Produto excluido com sucesso!'
      this.mensagemService.openSnackBar(mensagemProdutoExcluido)
    }
  }

  cancelar(){
    this.router.navigate(['/auth/produtos'])
  }

}
