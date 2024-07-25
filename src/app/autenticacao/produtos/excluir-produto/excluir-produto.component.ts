import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.scss']
})
export class ExcluirProdutoComponent implements OnInit{

  produto: Produto = {
    id: 0,
    nome: '',
    categoria: ''
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.buscarPorId(parseInt(id!)).subscribe((produto) => {
      this.produto = produto;
    })
  }

  excluirProduto(){
    if(this.produto.id){
      this.produtoService.excluir(this.produto.id).subscribe(() => {
        this.router.navigate(['/auth/produtos'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/auth/produtos'])
  }

}
