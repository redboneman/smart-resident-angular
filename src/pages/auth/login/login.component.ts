import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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
        private formBuilder: FormBuilder
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
        console.log(this.authForm.value)
    }

}
