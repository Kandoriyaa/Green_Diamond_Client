// loading-bar.interceptor.ts
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import { LoadingBarService } from '../../shared/service/loading-bar.service';

@Injectable({
    providedIn: 'root'
})
export class LoadingBarInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingBarService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();

        return next.handle(req).pipe(
            finalize(() => this.loadingService.hide())
        );
    }
}
