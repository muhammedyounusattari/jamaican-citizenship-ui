import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../shared/services/logout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginStatus:boolean;
  constructor(private logoutService:LogoutService) { 
    sessionStorage.clear();
    localStorage.clear();
  }

  ngOnInit() {
    this.logoutService.setTitle('home...');
   // this.logoutService.currentMessage.subscribe(message=>{this.loginStatus = message});
  }

}
