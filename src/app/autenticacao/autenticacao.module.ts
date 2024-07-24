import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../core/material/material.module";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";

@NgModule({
    declarations:[
        CadastroComponent,
        LoginComponent
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
        LoginComponent
    ]
})

export class AutenticacaoModule{}