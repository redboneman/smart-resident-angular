import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, mergeMap, Observable, skipWhile, take, throwError, timeout} from 'rxjs';
import {UserService} from './services/user.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    private passWithoutTokenRegex = /\/refresh/;

    constructor(
        private userService: UserService
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.passWithoutTokenRegex.test(req.url)) return next.handle(req);
        if (this.userService.token && this.userService.isTokenAlive()) {
            req.headers.set('Authorization', `Bearer ${this.userService.token}`);
            return next.handle(req);
        }
        if (this.userService.isTokenRefreshAvailable()) {
            this.userService.refreshToken();
        }
        return this.userService.tokenUpdated.pipe(
            skipWhile(() => this.userService.tokenStatus === 'pending'),
            timeout(30000),
            take(1),
            mergeMap(() => {
                req.headers.set('Authorization', `Bearer ${this.userService.token}`);
                return next.handle(req).pipe(
                    catchError(err => {
                        if (err.status === 401 || err.status === 403) {
                            this.userService.logout();
                        }
                        return throwError(err);
                    })
                );
            })
        );
    }

}
