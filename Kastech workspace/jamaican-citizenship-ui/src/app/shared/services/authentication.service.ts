import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from 'src/app/Profile';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Profile>;
  public currentUser: Observable<Profile>;

  constructor() {

    this.currentUserSubject = new BehaviorSubject<Profile>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Profile {
    return this.currentUserSubject.value;
  }
}
