import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_URL } from '../config/host.config';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http:HttpClient) { }

  getSlothResult(month,day){
    this.getResult().subscribe((data:any)=>{
       data = data["appointment"][month][day];
       return data;
    })
    return null;
  }

  getResult(){
    return this.http.get('assets/json/scheduler.json');
  }

  confirmAppointment(payload){
    const URL = HOST_URL.name +'/schedule-appointment/'
    return this.http.post(URL,payload,this.httpOptions);
  }

  isValidToSchedule(applicantId){
    const URL = HOST_URL.name +'/validate-schedule-appointment/'+applicantId+"/";
    return this.http.get(URL,this.httpOptions);
  }
}
