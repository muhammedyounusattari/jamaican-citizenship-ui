import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../Profile';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-individual-apointment-confirmation',
  templateUrl: './individual-apointment-confirmation.component.html',
  styleUrls: ['./individual-apointment-confirmation.component.css']
})
export class IndividualApointmentConfirmationComponent implements OnInit {

  date:string;
  time:string;
  profile:any;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private router:Router) { 
    var  data = sessionStorage.getItem('profile');
    this.profile = (data!=null)? JSON.parse(data):data;
  }

  ngOnInit() {
debugger;
   this.date =  this.profile.date;
   this.time = this.profile.time;
  }

  home(){
    this.router.navigate(['/home'])
  }

  logout(){
    this.router.navigate(['/home'])
  }
}
