import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RecoveryComponent} from './recovery/recovery.component';
import {ComponentsModule} from '../../shared/components/components.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AuthComponent} from './auth.component';


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RecoveryComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ComponentsModule,
        TranslateModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: [
        FormBuilder
    ]
})
export class AuthModule {
}
