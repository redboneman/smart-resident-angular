import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedGuard} from '../shared/guards/logged.guard';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('src/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [LoggedGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('src/pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [LoggedGuard]
})
export class AppRoutingModule {
}
