import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);
  const route = inject(Router);

  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.error('Unauthorized request:', err);
          route.navigate(['login'])
        } else {
          console.error('HTTP error:', err);
          toastr.error('HTTP error:', err.message);
          // route.navigate(['error'])
        }
      } else {
        toastr.error('An error occurred:', err)
      }
      return throwError(() => err);
    })
  );
};
// export const ErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
//     const route = inject(Router);
//     const authService = inject(AuthService);

//     return next(req).pipe(
//         catchError(error => {
//             // Default error message
//             let errorMessage = 'An unknown error occurred';
//             if (error.error instanceof ErrorEvent) {
//                 errorMessage = `Client-side error: ${error.error.message}`;
//             } else {
//                 errorMessage = `Server-side error: ${error.status} - ${error.message}`;
//             }

//             console.error('HTTP Error:', errorMessage);

//             // Handle specific status codes
//             if (error.status === 401 || error.status === 0) {
//                 route.navigate(['login'])
//             }
//             // Return the error back to the subscriber
//             return throwError(error);
//         })
//     );
// };

