import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../shared/services/logout.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-admin-forms',
  templateUrl: './admin-forms.component.html',
  styleUrls: ['./admin-forms.component.css']
})
export class AdminFormsComponent implements OnInit {

  private currentUserSubject: BehaviorSubject<String>;
  public currentUser: Observable<String>;


  constructor(private logoutService:LogoutService) {
    this.currentUserSubject = new BehaviorSubject<String>(JSON.parse(localStorage.getItem('isLoggedIn')));
    this.currentUser = this.currentUserSubject.asObservable();

   }

  ngOnInit() {
    if(localStorage.getItem('isLoggedIn'))
      this.logoutService.setTitle('All Forms');
  }

}
