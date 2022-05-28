import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoggedGuard} from '../../shared/guards/logged.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [LoggedGuard],
        children: [
            {path: '', component: HomepageComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [LoggedGuard]
})
export class DashboardRoutingModule {
}
