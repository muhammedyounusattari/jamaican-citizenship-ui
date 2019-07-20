import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_URL } from '../config/host.config';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) { }

  getFormsForReview(formType){
    const url = HOST_URL.name+"/forms-review/"+formType+"/";
    return this.httpClient.get(url,this.httpOptions);
  }

  loadAgentsDetails(){
    const url = HOST_URL.name+"/load-agents/";
    return this.httpClient.get(url,this.httpOptions);
  }

  assignToAgent(payload){
    const url = HOST_URL.name + "/assign-to-agent";
    return this.httpClient.post(url,payload,this.httpOptions);
  }
}
