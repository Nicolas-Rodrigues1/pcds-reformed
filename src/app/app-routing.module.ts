import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./home/home.module";
import { AutenticacaoModule } from "./autenticacao/autenticacao.module";

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/pagina-nao-encontrada',
        pathMatch: 'full'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes), HomeModule, AutenticacaoModule],
    exports: [RouterModule]
})

export class AppRoutingModule{}