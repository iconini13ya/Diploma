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

  constructor(private authservice:AuthService) { }
  login;
  password;
  async ngOnInit() {
    this.login="tolstikov";
    this.password="root";
  }
  Auth(){
    this.authservice.Login(this.login,this.password);
  }
  
  

}
