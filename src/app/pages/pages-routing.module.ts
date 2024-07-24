import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedidoVendaComponent } from "./pedido-venda/pedido-venda.component";

const routes: Routes = [
    {
        path: 'pedidos-venda',
        component: PedidoVendaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule{}