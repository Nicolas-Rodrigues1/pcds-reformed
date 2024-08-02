import { NgModule } from "@angular/core";
import { PedidoVendaComponent } from "./pedido-venda/pedido-venda.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../core/material/material.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { ListarClientesModalComponent } from './pedido-venda/listar-clientes-modal/listar-clientes-modal/listar-clientes-modal.component';
import { ConfirmarPedidoModalComponent } from './pedido-venda/confirmar-pedido-modal/confirmar-pedido-modal.component';
import { ListarVendasComponent } from './listar-vendas/listar-vendas.component';

@NgModule({
    declarations:[
        PedidoVendaComponent,
        ListarClientesModalComponent,
        ConfirmarPedidoModalComponent,
        ListarVendasComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        MaterialModule,
        PagesRoutingModule
    ],
    exports:[
        PedidoVendaComponent
    ]
})

export class PagesModule{}