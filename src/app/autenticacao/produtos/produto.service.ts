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
}
