import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ProdutoComponent } from "./produtos/produto/produto.component";
import { ListarProdutoComponent } from "./produtos/listar-produto/listar-produto.component";
import { CriarProdutoComponent } from "./produtos/criar-produto/criar-produto.component";
import { ExcluirProdutoComponent } from "./produtos/excluir-produto/excluir-produto.component";

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
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AutenticacaoRoutingModule{}