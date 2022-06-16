import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {HomepageComponent} from './homepage/homepage.component';
import {DashboardComponent} from './dashboard.component';
import {ComponentsModule} from '../../shared/components/components.module';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {DashboardService} from '../../shared/services/dashboard.service';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {TouchModule} from '../../shared/directives/touch.directive';
import {InterventionsComponent} from './interventions/interventions.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from '../../shared/request.interceptor';
import {UserService} from '../../shared/services/user.service';

@NgModule({
    declarations: [
        DashboardComponent,
        HomepageComponent,
        HeaderComponent,
        InterventionsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        DashboardRoutingModule,
        ComponentsModule,
        MatIconModule,
        TranslateModule,
        MatButtonModule,
        TouchModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
        DashboardService,
        UserService
    ]
})
export class DashboardModule {
}
