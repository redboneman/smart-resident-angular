import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RecoveryComponent} from './recovery/recovery.component';
import {AuthComponent} from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {path: '', component: LoginComponent},
            {path: 'recovery', component: RecoveryComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
