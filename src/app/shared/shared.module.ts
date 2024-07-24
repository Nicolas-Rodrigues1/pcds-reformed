import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        BannerComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports:[
        BannerComponent
    ]
})

export class SharedModule {}