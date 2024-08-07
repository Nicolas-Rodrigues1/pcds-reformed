import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent {
  
  produto: Produto = {
    id: 0,
    categoria: '',
    nome: '',
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private mensagemService: MensagemService 
  ) {
    this.gerarId();
  }

  criarProduto() {
    this.produtoService.criar(this.produto).subscribe(() => {
      this.router.navigate(['/auth/produtos']);
    });
    console.log(this.produto);
    const mensagemProdutoCriado = 'Produto criado com sucesso!';
    this.mensagemService.openSnackBar(mensagemProdutoCriado);
  }

  cancelar() {
    this.router.navigate(['/auth/produtos']);
  }

  gerarId(): void {
    if (this.produto.id === 0) {
      this.produto.id = Math.floor(Math.random() * 1000000000);
    }
  }
}
