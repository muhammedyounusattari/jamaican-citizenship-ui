import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_URL } from '../config/host.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaturlizationService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  submitNaturalisationForm(payload){
    const URL = HOST_URL.name +"/submit-naturalisation-form/";
    return this.http.post(URL,payload,this.httpOptions);
  }

  uploadFile(payload): Observable<any> {
    var info = JSON.parse(localStorage.getItem('roles')); 
    const url = HOST_URL.name+"/naturalisation-form-documents/"+info.email+"/";
    return this.http.post<any>(url, payload);
  }
}
