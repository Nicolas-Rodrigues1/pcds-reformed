import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ProdutoComponent } from "./produtos/produto/produto.component";
import { ListarProdutoComponent } from "./produtos/listar-produto/listar-produto.component";
import { CriarProdutoComponent } from "./produtos/criar-produto/criar-produto.component";
import { ExcluirProdutoComponent } from "./produtos/excluir-produto/excluir-produto.component";
import { EditarProdutoComponent } from "./produtos/editar-produto/editar-produto.component";
import { ExcluirClienteComponent } from "./clientes/excluir-cliente/excluir-cliente.component";
import { EditarClienteComponent } from "./clientes/editar-cliente/editar-cliente.component";
import { ClienteComponent } from "./clientes/cliente/cliente.component";
import { ListarClienteComponent } from "./clientes/listar-cliente/listar-cliente.component";
import { CriarClienteComponent } from "./clientes/criar-cliente/criar-cliente.component";

const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'cadastro',
        component: CadastroComponent
    },
    {
        path:'produtos',
        component: ProdutoComponent
    },
    {
        path:'listarProduto',
        component: ListarProdutoComponent
    },
    {
        path:'criarProduto',
        component: CriarProdutoComponent
    },
    {
        path:'produtos/excluirProduto/:id',
        component: ExcluirProdutoComponent
    },
    {
        path:'produtos/editarProduto/:id',
        component: EditarProdutoComponent
    },
    {
        path:'clientes',
        component: ClienteComponent
    },
    {
        path:'listarCliente',
        component: ListarClienteComponent
    },
    {
        path:'criarCliente',
        component: CriarClienteComponent
    },
    {
        path:'clientes/excluirCliente/:id',
        component: ExcluirClienteComponent
    },
    {
        path:'cliente/editarCliente/:id',
        component: EditarClienteComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AutenticacaoRoutingModule{}