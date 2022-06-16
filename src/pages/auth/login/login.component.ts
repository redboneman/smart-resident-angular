import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

    public authForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
    }

    changePassInputType(element: HTMLInputElement) {
        if (!element) return
        if (element.type === 'password') {
            element.type = 'text'
        } else {
            element.type = 'password'
        }
    }

    submitForm() {
        // console.log(this.authForm.value)
        this.userService.login(this.authForm.value);
    }

}
