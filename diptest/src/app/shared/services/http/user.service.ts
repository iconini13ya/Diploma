import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Httpcore } from './corehttp';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Httpcore {

  constructor(public http: HttpClient) {
    super(http,"/teachers");
   }
}
