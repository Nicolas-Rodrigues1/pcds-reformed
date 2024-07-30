import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos'
  private produtoSelecionadoSubject = new BehaviorSubject<Produto | null>(null)
  produtoSelecionado$ = this.produtoSelecionadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  selecionarProduto(produto: Produto){
    this.produtoSelecionadoSubject.next(produto)
  }

  listar(page: number, pageSize: number): Observable<Produto[]> {
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', pageSize.toString());

    return this.http.get<Produto[]>(this.apiUrl, { params });
  }
  
  criar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.apiUrl, produto)
  }

  excluir(id: string): Observable<Produto>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Produto>(url)
  }

  editar(produto: Produto): Observable<Produto>{
    const url = `${this.apiUrl}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }

  buscarPorId(id: string): Observable<Produto>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Produto>(url)
  }

  
}
