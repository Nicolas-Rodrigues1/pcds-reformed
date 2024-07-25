import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent {
  produtoForm!: FormGroup
  
  produto: Produto = {
    categoria: 'categoria teste',
    nome: 'nome teste'
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ){}

  criarProduto(){
    this.produtoService.criar(this.produto).subscribe(() => {
      this.router.navigate(['/auth/produto'])
    })
  }
}
