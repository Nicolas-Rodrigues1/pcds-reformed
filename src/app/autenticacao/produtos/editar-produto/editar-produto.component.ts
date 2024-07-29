import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/core/services/mensagem.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit{
  
  produto: Produto = {
    id: '',
    categoria: '',
    nome: ''
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
      this.produto = produto
    })
  }

  editarProduto(){
    this.produtoService.editar(this.produto).subscribe(()=>{
      this.router.navigate(['/auth/produtos'])
    })
    const mensagemProdutoAlterado = 'Produto alterado com sucesso!'
    this.mensagemService.openSnackBar(mensagemProdutoAlterado)
  }

  cancelar() {
    this.router.navigate(['/auth/produtos'])
  }

}
