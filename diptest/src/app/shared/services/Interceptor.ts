import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
        let token = JSON.parse(localStorage.getItem("token")).token;
        if(token !== ""){
            const reqWithAuth= req.clone({
                setHeaders:{
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(reqWithAuth);
        }
        else{
            const reqWithAuth= req.clone({
            });
            return next.handle(reqWithAuth);
        }
        
    }
}