import {Injectable} from '@angular/core';
import {interval, map, Subject, take} from 'rxjs';
import {parseJwt} from '../utils';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

type TokenStatus = 'ready' | 'pending' | 'empty';
type AuthForm = { email: string, password: string }

export interface UserModel {
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    image?: string,
    rights: {
        admin: boolean,
        owner: boolean,
        realEstateCompanies: boolean,
        _id: string
    }
}

@Injectable()
export class UserService {

    private readonly tokenRefreshInterval = 1500;

    public tokenUpdated: Subject<any> = new Subject<any>();
    public tokenStatusUpdated: Subject<any> = new Subject<any>();
    private _token: string | undefined;
    private _tokenStatus: TokenStatus = 'empty';
    private tokenUpdateTimestamp: number | undefined;

    public _user: UserModel | undefined;
    public userUpdated: Subject<any> = new Subject<any>();

    get user(): UserModel | undefined {
        return this._user;
    }

    set user(value: UserModel | undefined) {
        this._user = value;
        this.userUpdated.next(value);
    }

    get token(): string | undefined {
        return this._token;
    }

    set token(value: string | undefined) {
        this._token = value;
        this.tokenUpdated.next(value);
    }

    get tokenStatus(): TokenStatus {
        return this._tokenStatus;
    }

    set tokenStatus(value: TokenStatus) {
        this._tokenStatus = value;
        this.tokenStatusUpdated.next(value);
    }

    constructor(
        private http: HttpClient
    ) {
    }

    public refreshToken() {
        interval(2000).pipe(
            take(2),
            map(take => {
                switch (take) {
                    case 0:
                        this.tokenStatus = 'pending';
                        this.token = undefined;
                        break;
                    case 1:
                        this.tokenStatus = 'ready';
                        this.token = 'sometoken';
                        break;
                }
            })
        ).subscribe()
        // todo
    }

    public login(form: AuthForm) {
        if (!form.email || !form.password) throw Error('Invalid auth credentials');
        this.http.post(`${environment.api}auth/authorization/admin`, form).subscribe({
            next: (response: any) => {
                if (response && response.credentials && response.tokens) {
                    this.user = response.credentials;
                    this.token = response.tokens;
                } else {
                    throw Error('Auth response invalid');
                }
            },
            error: (error: any) => {
                console.error(error);
            }
        })
    }

    public logout() {
        this.user = undefined;
    }

    public isTokenRefreshAvailable(): boolean {
        if (!this.tokenUpdateTimestamp || this.tokenStatus !== 'pending') return true;
        return new Date().getTime() - this.tokenUpdateTimestamp > this.tokenRefreshInterval;
    }

    public isTokenAlive(): boolean {
        if (!this.token) return false;
        try {
            const parsedToken = parseJwt(this.token);
            if (!parsedToken || !parsedToken.exp) return false;
            return parsedToken.exp * 1000 - new Date().getTime() >= 30000;
        } catch (e) {
            console.error('INNER', e);
            return false;
        }
    }
}
