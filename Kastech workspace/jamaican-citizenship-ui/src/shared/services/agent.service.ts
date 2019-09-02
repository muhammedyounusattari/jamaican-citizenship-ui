import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_URL } from 'src/app/shared/config/host.config';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getReviewForm(applicantId,type){
    const url = HOST_URL.name+"/applicant-detail/"+applicantId+"/"+type+"/";
    return this.http.get(url,this.httpOptions);
  }

  updateApplicantStatus(payload){
    debugger;
    const url = HOST_URL.name+"/update-applicant/";
    return this.http.post(url,payload,this.httpOptions);
  }
}
