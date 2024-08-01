import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'
  private clienteSelecionadoSubject = new BehaviorSubject<Cliente | null>(null);
  clienteSelecionado$ = this.clienteSelecionadoSubject.asObservable();

  constructor(private http: HttpClient) { }

  selecionarCliente(cliente: Cliente){
    this.clienteSelecionadoSubject.next(cliente)
  }

  listar(page: number, pageSize: number): Observable<Cliente[]>{
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit',pageSize.toString());

    return this.http.get<Cliente[]>(this.apiUrl, { params })
  }

  criar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl, cliente)
  }

  excluir(id: number): Observable<Cliente>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }

  editar(cliente: Cliente): Observable<Cliente>{
    const url = `${this.apiUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }

}
