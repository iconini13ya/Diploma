import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/http/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:object;
  constructor(private userservice:UserService) { }

  async ngOnInit() {
    this.users= await this.userservice.getAll();
    console.log(this.users);
  }

}
