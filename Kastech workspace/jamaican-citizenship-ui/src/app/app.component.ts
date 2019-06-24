import { Component, OnInit } from '@angular/core';
import { LogoutService } from './shared/services/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jamaican-citizenship-ui';
  loginStatus:boolean;

  constructor(private logoutService:LogoutService){}

  ngOnInit(){
    // sessionStorage.removeItem('profile');
   sessionStorage.clear();
    // this.logoutService.changeMessage(true);
    // this.logoutService.currentMessage.subscribe(message=>{this.loginStatus = message});
  }

  logout(){
    this.logoutService.changeMessage(false);
    this.logoutService.currentMessage.subscribe(message=>{this.loginStatus = message});
  }
}