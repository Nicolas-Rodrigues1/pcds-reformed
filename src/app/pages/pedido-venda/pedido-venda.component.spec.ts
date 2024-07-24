import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoVendaComponent } from './pedido-venda.component';

describe('PedidoVendaComponent', () => {
  let component: PedidoVendaComponent;
  let fixture: ComponentFixture<PedidoVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoVendaComponent]
    });
    fixture = TestBed.createComponent(PedidoVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
