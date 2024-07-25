import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../core/material/material.module";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";
import { ProdutoComponent } from "./produtos/produto/produto.component";

import { ListarProdutoComponent } from './produtos/listar-produto/listar-produto.component';
import { CriarProdutoComponent } from './produtos/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './produtos/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './produtos/excluir-produto/excluir-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        CadastroComponent,
        LoginComponent,
        ProdutoComponent,
        ListarProdutoComponent,
        CriarProdutoComponent,
        EditarProdutoComponent,
        ExcluirProdutoComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        MaterialModule,
        AutenticacaoRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        CadastroComponent,
        LoginComponent,
        ProdutoComponent
    ]
})

export class AutenticacaoModule{}