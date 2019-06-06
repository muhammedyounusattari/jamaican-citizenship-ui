import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HOST_URL } from '../config/host.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescentFormService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient:HttpClient) { }

  submitDescentForm(payload){
    
    const url = HOST_URL.name+"/submit-descent-form";
    return this.httpClient.post(url,payload,this.httpOptions);
  }

  uploadFile(data: FormData): Observable<any> {
    var info = JSON.parse(sessionStorage.getItem('profile'));
    const url = HOST_URL.name+"/descent-form-documents/"+info.email+"/";
    return this.httpClient.post<any>(url, data);
  }

}
