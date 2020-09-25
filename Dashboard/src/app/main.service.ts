import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  getAuth(Login,Password){
    return this.http.post("http://dashboard.kholodov.xyz/api/auth",{"login":Login,"password":Password}).toPromise()
  }


}
