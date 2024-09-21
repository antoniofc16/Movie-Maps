import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { finalize, catchError, tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { LoaderService } from "../services/commons/api/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(public loaderService: LoaderService,
                private router: Router) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(request.headers.get("Internal-Type-Request") == "silent"){
        return next.handle(request)
        .pipe(
            tap(() => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        console.log("Error: ", err);
                        if (err.status !== 403) {
                            return;
                        }
                    }
                },
            ));
      }
      else{
        this.loaderService.show();
        return next.handle(request)
        .pipe(
            finalize(() => {
                this.loaderService.hide()
            }),
            tap(() => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        console.log("Error: ", err);
                        if (err.status !== 403) {
                            return;
                        }
                    }
                },
            ));
      }
    }
}
