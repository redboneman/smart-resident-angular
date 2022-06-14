import {Injectable} from '@angular/core';
import {interval, map, Subject, take} from 'rxjs';

type TokenStatus = 'ready' | 'pending' | 'empty';

@Injectable()
export class TokenService {
    private readonly tokenRefreshInterval = 1500;

    public tokenUpdated: Subject<any> = new Subject<any>();
    public tokenStatusUpdated: Subject<any> = new Subject<any>();
    private _token: string | undefined;
    private _tokenStatus: TokenStatus = 'empty';
    private tokenUpdateTimestamp: number | undefined;

    get accessToken(): string | undefined {
        return this._token;
    }

    set accessToken(value: string | undefined) {
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

    constructor() {
    }

    public refresh() {
        interval(2000).pipe(
            take(2),
            map(take => {
                switch (take) {
                    case 0:
                        this.tokenStatus = 'pending';
                        this.accessToken = undefined;
                        break;
                    case 1:
                        this.tokenStatus = 'ready';
                        this.accessToken = 'sometoken';
                        break;
                }
            })
        ).subscribe()
        // todo
    }

    public init() {
        // todo
    }

    public isTokenRefreshAvailable(): boolean {
        if (!this.tokenUpdateTimestamp || this.tokenStatus !== 'pending') return true;
        return new Date().getTime() - this.tokenUpdateTimestamp > this.tokenRefreshInterval;
    }
}
