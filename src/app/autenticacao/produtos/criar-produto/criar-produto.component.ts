import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit{
  
  produto: Produto = {
    categoria: '',
    nome: ''
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
  ){}

  ngOnInit() {
  }

  criarProduto(){
    this.produtoService.criar(this.produto).subscribe(() => {
      this.router.navigate(['/auth/produtos'])
    })
    console.log(this.produto)
  }

  cancelar() {
    this.router.navigate(['/auth/produtos'])
  }
}
