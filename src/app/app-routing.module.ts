import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./home/home.module";
import { AutenticacaoModule } from "./autenticacao/autenticacao.module";

const routes: Routes = [
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:'home',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes), HomeModule, AutenticacaoModule],
    exports: [RouterModule]
})

export class AppRoutingModule{}