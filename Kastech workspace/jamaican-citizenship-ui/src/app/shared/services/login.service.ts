import { Injectable } from '@angular/core';

import {HttpHeaders, HttpClient } from '@angular/common/http';
import { HOST_URL } from "../config/host.config";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { HOST } from '@angular/core/src/render3/interfaces/view';

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

  authenticateOffical(payload){
    const url = HOST_URL.name+"/validate-offical-login";
    return this.http.post(url,payload,this.httpOptions);
  }


  validateEmail(email){
    const url = HOST_URL.name+"/validate-email/"+email+"/";
    return this.http.get(url,this.httpOptions);
  }

  validateEmailAddress(email){
    const url = HOST_URL.name+"/email-check/"+email+"/";
    return this.http.get(url,this.httpOptions);
  }

  resetPassword(payload){
    const url = HOST_URL.name+"/reset-password";
    return this.http.post(url,payload,this.httpOptions);
  }

  getDescentForm(email){
    const url = HOST_URL.name+"/descent-form/"+email+"/";
    return this.http.get(url,this.httpOptions);
  }

  validateAgent(payload){
    const url = HOST_URL.name+"/validate-agent";
    return this.http.post(url,payload,this.httpOptions);
  }
}
