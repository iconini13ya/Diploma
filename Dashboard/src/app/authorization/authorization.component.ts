import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  Login;
  Password;
  constructor(private Service:MainService) { }

  ngOnInit(): void {
    this.Login="tolstikov"
    this.Password="root"
  }
  async Auth(){
    
    console.log( await this.Service.getAuth(this.Login,this.Password));
  }

}
