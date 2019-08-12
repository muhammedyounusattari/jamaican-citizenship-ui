import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-desk-clerk',
  templateUrl: './local-desk-clerk.component.html',
  styleUrls: ['./local-desk-clerk.component.css']
})
export class LocalDeskClerkComponent implements OnInit {

  menuOption:string ='';
  menuValue:string='';
  selected:string;
  menuDropValue = [
    
    {name:'Review Applications',value:"ra"},
    {name:'View Appointment Schedule',value:"vas"}
  ];



  constructor(private router:Router) { }

  ngOnInit() {
  }

  changeMenu(event){

    if(this.selected=="ra"){

    }
    if(this.selected==="vas"){
      this.router.navigate(['/localDeskClerkProcess']);
    }
  
  }
}
