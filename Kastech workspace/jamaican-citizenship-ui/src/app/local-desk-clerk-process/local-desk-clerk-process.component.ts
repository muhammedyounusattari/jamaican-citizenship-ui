import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-desk-clerk-process',
  templateUrl: './local-desk-clerk-process.component.html',
  styleUrls: ['./local-desk-clerk-process.component.css']
})
export class LocalDeskClerkProcessComponent implements OnInit {

  

  disabledDates: any;
  datePickerConfig: Partial<BsDatepickerConfig>;
  byDate:string;
  todaysDate:Date = new Date();
  selected:string;
  showFilteredResult:boolean = false;

  timeSlots = [
    {value:'ten',name:"10.00 am - 12.00 am"},
    {value:'tweleve',name:"12.00 am - 2.00 pm"},
    {value:'two',name:"2.00 pm- 4.00 pm"}
  ];
  constructor(private router:Router) { 

  }

  ngOnInit() {
    this.disabledDates = [
      new Date('2019-01-21'),
      new Date('2019-03-06'),
      new Date('2019-04-19'),
      new Date('2019-04-22'),
      new Date('2019-05-23'),
      new Date('2019-08-01'),
      new Date('2019-08-06'),
      new Date('2019-10-21'),
      new Date('2019-12-25'),
      new Date('2019-12-26')
   ]

   this.datePickerConfig = Object.assign({}, {
    showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY',
    minDate: new Date(),
    //maxDate: this.cal1_max,
    daysDisabled: [6,0],
    datesDisabled: this.disabledDates
    
  })
  }


  changeMenu(event){
  debugger;
  if(this.selected)  
    this.showFilteredResult = true;
  }

  back(){
    this.router.navigate(['/localDeskClerk'])
  }

}
