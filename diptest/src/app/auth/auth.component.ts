import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }
  login;
  password;
  ngOnInit() {
    if (this.authservice.isLoggedIn == true){
      this.router.navigate(["/home"]);
    }
    this.login="tolstikov";
    this.password="root";
  }
  Auth(){
    this.authservice.Login(this.login,this.password);
  }
  
  

}
