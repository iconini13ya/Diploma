import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }
  private baseUrl = "http://dashboard.kholodov.xyz/api";

  async Login(login,password){
    let data={
      "login":login,
      "password":password
    }
    let res:any = await this.http.post(this.baseUrl+"/auth",data).toPromise();
    console.log(res);
    localStorage.setItem("token",res.token);
    this.router.navigate(["/home"]);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }
}
