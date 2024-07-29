import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientesModalComponent } from './listar-clientes-modal.component';

describe('ListarClientesModalComponent', () => {
  let component: ListarClientesModalComponent;
  let fixture: ComponentFixture<ListarClientesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClientesModalComponent]
    });
    fixture = TestBed.createComponent(ListarClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
