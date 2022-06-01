import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo/logo.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './banner/banner.component';


@NgModule({
    declarations: [
        LogoComponent,
        SubHeaderComponent,
        BannerComponent
    ],
    exports: [
        LogoComponent,
        SubHeaderComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class ComponentsModule {
}
