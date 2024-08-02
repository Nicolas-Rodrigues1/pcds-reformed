import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AutenticacaoRoutingModule } from "../autenticacao/autenticacao-routing.module";

@NgModule({
    declarations:[
        BannerComponent,
        CardComponent,
        ContainerComponent,
        SidenavComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        AutenticacaoRoutingModule
    ],
    exports:[
        BannerComponent,
        CardComponent,
        ContainerComponent,
        SidenavComponent
    ]
})

export class SharedModule {}