import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_URL } from "../config/host.config";

@Injectable({
  providedIn: 'root'
})
export class AppStatusService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  checkAppCodeStatus(appCode){
    const url = HOST_URL.name+"/app-code-status/"+appCode+"/";
    return  this.http.get(url,this.httpOptions);
  }
}
