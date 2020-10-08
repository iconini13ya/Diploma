import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{
    constructor(private authservice:AuthService,private router:Router){}
    intercept(req: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
        let token = this.authservice.getToken();
        if(token == null){
            
            return next.handle(req);
            
        }
        else{
            const reqWithAuth= req.clone({
                setHeaders:{
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(reqWithAuth);
        }
        
    }
}