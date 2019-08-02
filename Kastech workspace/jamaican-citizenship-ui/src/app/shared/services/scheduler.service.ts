import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

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
}
