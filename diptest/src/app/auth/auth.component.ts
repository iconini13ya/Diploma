import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  async ngOnInit() {
    var body = {
      login: "tolstikov",
      password: "root"
    }
   let key = await this.authservice.auth(body);
   console.log(key);
    
  }

}
