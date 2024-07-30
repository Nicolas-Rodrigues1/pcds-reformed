import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:3000/pedidos'

  constructor(private http: HttpClient) { }

  criarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.apiUrl, pedido)
  }

  listarPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.apiUrl);
  }
}
