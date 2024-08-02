import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPedidoModalComponent } from './confirmar-pedido-modal.component';

describe('ConfirmarPedidoModalComponent', () => {
  let component: ConfirmarPedidoModalComponent;
  let fixture: ComponentFixture<ConfirmarPedidoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarPedidoModalComponent]
    });
    fixture = TestBed.createComponent(ConfirmarPedidoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
