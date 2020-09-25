import { Injectable } from '@angular/core';
import { Httpcore } from './corehttp';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Httpcore {

  constructor() {
    super();
   }
   

   login() {
     
   }
}
