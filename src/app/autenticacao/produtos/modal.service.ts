import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private dadosModal = new Subject<{id: string, confirmar:() => void}>();

  getDadosModal(){
    return this.dadosModal.asObservable();
  }

  abrirModal(id: string, confirmar: () => void){
    this.dadosModal.next({id, confirmar});
  }
  
}
