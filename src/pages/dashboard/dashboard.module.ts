import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {DashboardComponent} from './dashboard.component';
import {ComponentsModule} from '../../shared/components/components.module';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardService} from '../../shared/services/dashboard.service';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        DashboardComponent,
        HomepageComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ComponentsModule,
        MatIconModule,
        TranslateModule,
        MatButtonModule
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule {
}
