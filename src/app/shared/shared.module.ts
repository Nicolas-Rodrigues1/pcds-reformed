import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
    declarations:[
        BannerComponent,
        CardComponent,
        ContainerComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports:[
        BannerComponent,
        CardComponent,
        ContainerComponent
    ]
})

export class SharedModule {}