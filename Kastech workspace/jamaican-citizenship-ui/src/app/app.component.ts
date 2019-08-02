import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from './shared/services/logout.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { Profile } from './Profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';// = 'jamaican-citizenship-ui';
  loginStatus;
  currentUser;
  private currentUserSubject: BehaviorSubject<Profile>;

  constructor(private logoutService: LogoutService, private router: Router,
    private authentication:AuthenticationService) {
    this.loginStatus = localStorage.getItem('isLoggedIn')

    this.authentication.currentUser.subscribe(x => this.currentUser = x);
    console.log('........', this.loginStatus)
  }

  ngOnInit() {
    // if (localStorage.getItem('isLoggedIn'))
    // this.logoutService.title.subscribe(title => {
    //   this.title = title;
    // })



    this.logoutService.setTitle('home');
    // sessionStorage.removeItem('profile');
    sessionStorage.clear();
    // this.headerService.title.subscribe(title => {
    //   this.title = title;
    // });

    // this.logoutService.changeMessage(true);
    // this.logoutService.currentMessage.subscribe(message=>
    //   {
    //     this.loginStatus = message;
    //   });


  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/logout'])
    // this.logoutService.changeMessage(false);
    // this.logoutService.currentMessage.subscribe(message => { 
    //   this.loginStatus = message 
    // });

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);


  }
}