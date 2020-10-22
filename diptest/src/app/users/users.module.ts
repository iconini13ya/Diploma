import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/sharedmodule/shared.module';


@NgModule({
  declarations: [UserListComponent, UserItemComponent, UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
