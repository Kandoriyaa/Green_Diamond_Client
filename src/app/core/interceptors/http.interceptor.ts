import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingBarService } from '../../shared/service/loading-bar.service';

export const HttpInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {
    const progressBarService = inject(LoadingBarService);
    progressBarService.show();

    return next(req).pipe(finalize(() => progressBarService.hide()));
};
