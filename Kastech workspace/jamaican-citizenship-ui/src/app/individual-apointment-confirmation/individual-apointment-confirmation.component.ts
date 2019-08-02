import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-apointment-confirmation',
  templateUrl: './individual-apointment-confirmation.component.html',
  styleUrls: ['./individual-apointment-confirmation.component.css']
})
export class IndividualApointmentConfirmationComponent implements OnInit {

  date:string;
  time:string;
  constructor(private router:Router) { }

  ngOnInit() {
   this.date =  localStorage.getItem('date');
   this.time = localStorage.getItem('time');
  }

  home(){
    this.router.navigate(['/home'])
  }

  logout(){
    this.router.navigate(['/home'])
  }
}
