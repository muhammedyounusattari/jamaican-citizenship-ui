import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  public title = new BehaviorSubject('Title');

  // private messageSource = new BehaviorSubject<boolean>(false);
  // currentMessage = this.messageSource.asObservable();

  // constructor() { }

  // changeMessage(message:boolean){
  //   this.messageSource.next(message); 
  // }

  setTitle(title){
    this.title.next(title);
  }
}
