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

  getFormsForReview(formType,type){
    const url = HOST_URL.name+"/forms-review/"+formType+"/"+type+"/";
    return this.httpClient.get(url,this.httpOptions);
  }

  loadAgentsDetails(formType,type){
    if(type=='cs'){
      type='review';
    }
    const url = HOST_URL.name+"/load-agents/"+formType+"/"+type+"/";
    return this.httpClient.get(url,this.httpOptions);
  }

  loadDeskClerk(formType){
    const url = HOST_URL.name+"/load-deskclerk/"+formType+"/";
    return this.httpClient.get(url,this.httpOptions);
  }


  assignToAgent(payload,type){
    var url;
    if(type==="supervisor")
       url = HOST_URL.name + "/assign-to-deskclerk";
    if(type==="compliancesupervisor")
      url = HOST_URL.name + "/assign-to-agent";

    return this.httpClient.post(url,payload,this.httpOptions);
  }
getAgentApplicantList(agentId,formType){
    const url = HOST_URL.name + "/agent-applicant/"+agentId+"/"+formType+"/";
    return this.httpClient.get(url,this.httpOptions);
  }

  getDeskClerkApplicantList(clerkId,formType){
    const url = HOST_URL.name + "/deskclerk-applicant/"+clerkId+"/"+formType+"/";
    return this.httpClient.get(url,this.httpOptions);
  }
}
