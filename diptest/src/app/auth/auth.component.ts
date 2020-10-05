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
  }
  async auth(){
    this.guard.key=await this.authservice.auth(this.login,this.password);
    console.log(this.guard.key)
    if (this.guard.key!=="undefined"){
      this.router.navigate(["/home"]);
    }
  }

}
