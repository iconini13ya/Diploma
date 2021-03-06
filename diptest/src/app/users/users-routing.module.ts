import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';


const routes: Routes = [
  {path:'', component: UsersComponent, children: [
    {path:'', component: UserListComponent},
    {path: 'item', component: UserItemComponent},
    {path: 'item/:id', component: UserItemComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
