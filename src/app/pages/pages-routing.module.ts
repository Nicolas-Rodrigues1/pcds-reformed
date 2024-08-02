import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedidoVendaComponent } from "./pedido-venda/pedido-venda.component";
import { ListarVendasComponent } from "./listar-vendas/listar-vendas.component";

const routes: Routes = [
    {
        path: 'pedidos-venda',
        component: PedidoVendaComponent
    },
    {
        path: 'listar-vendas',
        component: ListarVendasComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule{}