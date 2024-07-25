import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl)
  }

  criar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.apiUrl, produto)
  }

  excluir(id: number): Observable<Produto>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Produto>(url)
  }

  editar(produto: Produto): Observable<Produto>{
    const url = `${this.apiUrl}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }

  buscarPorId(id: number): Observable<Produto>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Produto>(url)
  }
}
