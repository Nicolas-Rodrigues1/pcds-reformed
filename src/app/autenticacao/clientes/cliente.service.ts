import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl)
  }

  criar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl, cliente)
  }

  excluir(id: string): Observable<Cliente>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }

  editar(cliente: Cliente): Observable<Cliente>{
    const url = `${this.apiUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

  buscarPorId(id: string): Observable<Cliente>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Cliente>(url)
  }
}