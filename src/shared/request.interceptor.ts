import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, mergeMap, Observable, skipWhile, take, throwError, timeout} from 'rxjs';
import {TokenService} from './services/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    private passWithoutTokenRegex = /\/refresh/;

    constructor(
        private token: TokenService
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.passWithoutTokenRegex.test(req.url)) return next.handle(req);
        if (this.token.accessToken) {
            req.headers.set('Authorization', `Bearer ${this.token.accessToken}`);
            return next.handle(req);
        }
        if (this.token.isTokenRefreshAvailable()) {
            this.token.refresh();
        }
        return this.token.tokenUpdated.pipe(
            skipWhile(() => this.token.tokenStatus === 'pending'),
            timeout(30000),
            take(1),
            mergeMap(() => {
                req.headers.set('Authorization', `Bearer ${this.token.accessToken}`);
                return next.handle(req).pipe(
                    catchError(err => {
                        // todo logout
                        return throwError(err);
                    })
                );
            })
        );
    }

}
