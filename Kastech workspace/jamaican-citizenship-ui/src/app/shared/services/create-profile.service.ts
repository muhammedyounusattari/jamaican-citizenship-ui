import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { HOST_URL } from "../config/host.config";

@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  createProfile(payload){
    const url = HOST_URL.name+"/create-profile";
    console.log(url);
    return this.http.post(url,payload,this.httpOptions);
  }
}
