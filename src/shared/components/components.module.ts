import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo/logo.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './banner/banner.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
    declarations: [
        LogoComponent,
        SubHeaderComponent,
        BannerComponent,
        RightPanelComponent,
        RectangularComponent
    ],
    exports: [
        LogoComponent,
        SubHeaderComponent,
        BannerComponent,
        RightPanelComponent,
        RectangularComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
        TranslateModule,
        MatMenuModule
    ]
})
export class ComponentsModule {
}
