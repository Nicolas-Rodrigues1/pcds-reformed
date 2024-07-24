import { NgModule } from "@angular/core";
import { PedidoVendaComponent } from "./pedido-venda/pedido-venda.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../core/material/material.module";
import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
    declarations:[
        PedidoVendaComponent
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