import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../core/material/material.module";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
    declarations:[
        CadastroComponent,
        LoginComponent,
        ProdutoComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        MaterialModule,
        AutenticacaoRoutingModule,
        ReactiveFormsModule
    ],
    exports:[
        CadastroComponent,
        LoginComponent,
        ProdutoComponent
    ]
})

export class AutenticacaoModule{}