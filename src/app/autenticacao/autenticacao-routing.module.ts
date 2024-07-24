import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ProdutoComponent } from "./produto/produto.component";

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
        path:'produto',
        component: ProdutoComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AutenticacaoRoutingModule{}