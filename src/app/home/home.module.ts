import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "../core/material/material.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        MaterialModule,
        HomeRoutingModule
    ],
    exports:[
        HomeComponent
    ]
})

export class HomeModule{}