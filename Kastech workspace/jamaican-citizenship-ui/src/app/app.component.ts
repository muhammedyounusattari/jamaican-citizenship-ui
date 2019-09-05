import { Component, OnInit } from '@angular/core';
import {  Router, NavigationStart } from '@angular/router';
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
  loginStatus: boolean = false;
  logoutStatus: boolean = true;
  currentUser;
  roles: any;
  userName: string;
  private currentUserSubject: BehaviorSubject<Profile>;

  constructor(private logoutService: LogoutService, private router: Router,
    private authentication:AuthenticationService) {
    //this.loginStatus = localStorage.getItem('isLoggedIn')
      
    this.authentication.currentUser.subscribe(x => this.currentUser = x);
    console.log('........' + this.loginStatus); 
  }

  ngOnInit() {  
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        //console.log(event);
          if (event['url'] === '/login' || event['url'] === '/' || event['url'] === '/home' ||
           event['url'] === '/login/offical' || event['url'] === '/status' || event['url'] === '/login/scheduleAppointment' || event['url'] === '/home#photo-check' || event['url'] === '/home#fee-calc') {
            this.loginStatus = false;
          } else {
            this.loginStatus = true;
           //console.log(this.loginStatus);
          
          }
      }
    });

    this.roles = JSON.parse(localStorage.getItem('roles'));
    console.log(this.roles);

    //this.userName = this.roles.name || this.roles.firstname || this.roles.profile.firstname;
    //window.location.reload();

 console.log(this.userName);
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
    //localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/logout'])
    // this.logoutService.changeMessage(false);
    // this.logoutService.currentMessage.subscribe(message => { 
    //   this.loginStatus = message 
    // });
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  
}