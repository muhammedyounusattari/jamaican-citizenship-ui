import { Injectable } from '@angular/core';

import {HttpHeaders, HttpClient } from '@angular/common/http';
import { HOST_URL } from "../config/host.config";
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  @BlockUI() blockUI: NgBlockUI;
  constructor(private http:HttpClient) { }

  authenticate(payload){
    const url = HOST_URL.name+"/login";
    return this.http.post(url,payload,this.httpOptions);
  }

  validateEmail(email){
    const url = HOST_URL.name+"/validate-email/"+email+"/";
    return this.http.get(url,this.httpOptions);
  }

  resetPassword(payload){
    const url = HOST_URL.name+"/reset-password";
    return this.http.post(url,payload,this.httpOptions);
  }
}
