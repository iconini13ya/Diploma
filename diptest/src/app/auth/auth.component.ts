import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../shared/helpers/auth.guard';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authservice:AuthService,private guard: AuthGuard, private router:Router) { }
  login;
  password;
  async ngOnInit() {
    this.login="tolstikov";
    this.password="root";
  }
  async auth(){
    // console.log(JSON.parse(localStorage.getItem("token")).token);
    this.guard.key=await this.authservice.auth(this.login,this.password);
    console.log(this.guard.key)
    if (this.guard.key!=="undefined"){
      localStorage.setItem("token",JSON.stringify(this.guard.key));
      this.router.navigate(["/home"]);
    }
  }
  

}
