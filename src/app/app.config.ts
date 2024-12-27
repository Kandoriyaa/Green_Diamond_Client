import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { LoadingBarInterceptor } from './core/interceptors/loading-bar.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([
        ])),
    provideAnimations(), // required animations providers
    provideToastr({
        timeOut: 5000,
        extendedTimeOut: 1000,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        progressBar: true,
    }),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true },
]
};
