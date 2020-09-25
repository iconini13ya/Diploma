import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private baseUrl = "http://dashboard.kholodov.xyz/api/auth";

  public auth(authinfo){
    console.log(authinfo);
    return this.http.post(this.baseUrl,authinfo).toPromise();
  }
}
