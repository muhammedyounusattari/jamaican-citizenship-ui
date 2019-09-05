

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BsDatepickerConfig, MonthPickerComponent } from 'ngx-bootstrap';
import { UtilityService } from '../shared/services/utility.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SchedulerService } from '../shared/services/scheduler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgBlockUI, BlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-individual-schedule',
  templateUrl: './individual-schedule.component.html',
  styleUrls: ['./individual-schedule.component.css']
})
export class IndividualScheduleComponent implements OnInit {

  datePickerConfig1: Partial<BsDatepickerConfig>;
  datePickerConfig2: Partial<BsDatepickerConfig>;
  datePickerConfig3: Partial<BsDatepickerConfig>;

  indidualScheduleForm: FormGroup;

  today: Date = new Date();

  cal1_min: Date = this.today;
  cal1_max: Date = new Date(this.today.getFullYear(), this.today.getMonth(), 31);

  cal2_min: Date = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 1);
  cal2_max: Date = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 31);

  cal3_min: Date = new Date(this.today.getFullYear(), this.today.getMonth() + 2, 1);
  cal3_max: Date = new Date(this.today.getFullYear(), this.today.getMonth() + 2, 31);

  cal1: string = '';
  cal2: string = '';
  cal3: string = '';

  slothSelected:string;
  model='';
  sloths: any;
  disabledDatesCal1: any;
  disabledDates: any;
  dates: Array<Date>;
  applicantId:string;
  
  // bsInlineValue = new Date();
  @BlockUI() blockUI: NgBlockUI;
  constructor(private utilityService: UtilityService, private cdr: ChangeDetectorRef, 
    private formBuilder: FormBuilder, private scheduleService: SchedulerService,
    private router: Router,private activatedRoute:ActivatedRoute) {
      this.activatedRoute.params.subscribe((param)=>{
        this.applicantId = param.applicantId;
      })


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

    



    // console.log(this.utilityService.enhancedDate(this.date1,0,1,0));
    this.datePickerConfig1 = Object.assign({}, {
      showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY',
      minDate: this.cal1_min,
      maxDate: this.cal1_max,
      daysDisabled: [6,0],
      datesDisabled: this.disabledDates
      
    })

    this.datePickerConfig2 = Object.assign({}, {
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY',
      minDate: this.cal2_min,
      maxDate: this.cal2_max,
      daysDisabled: [6,0],
      datesDisabled: this.disabledDates
    })

    this.datePickerConfig3 = Object.assign({}, {
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY',
      minDate: this.cal3_min,
      maxDate: this.cal3_max,
      daysDisabled: [6,0],
      datesDisabled: this.disabledDates
    })


  }


  holidaysDates(calendar) {
    var month = this.utilityService.getMonth(calendar.getMonth());

    this.scheduleService.getResult().toPromise().then((data) => {
    
      this.dates = [];
      var info = data["appointment"][month.toLowerCase()];
      for (var key in info) {
        if (info[key]["disable"] == "false") {
          this.dates.push(new Date(this.utilityService.convertDate(key)));
        }
      }
      this.disabledDates =this.dates;

      return this.dates;
    })
    return this.dates;
  }

  changeDate(calendarSelected, event) {
   if(!event)
    return false; 
    //console.log(calendarSelected);
    if(calendarSelected == 'cal1'){
      console.log('cal1');
      this.cal2 = '';
      this.cal3 = '';
    }
    else if(calendarSelected == 'cal2'){
      console.log('cal2');
      this.cal1 = '';
      this.cal3 = '';
      //debugger;
     
    }
    else if(calendarSelected == 'cal3'){
      console.log('cal3');
      this.cal1 = '';
      this.cal2 = '';
    }

    var month = this.utilityService.getMonth(event.getMonth());
    var date = event.getDate() + "/" + (event.getMonth() + 1) + "/" + event.getFullYear();
    var day = this.utilityService.getDay(event.getDay());
    var fullDate = day + " ," + month + " " + event.getDate() + " " + event.getFullYear();
    //this.sloths = this.scheduleService.getSlothResult(month,date);

    this.scheduleService.getResult().toPromise().then((data) => {
      this.sloths = data["appointment"][month.toLowerCase()][date].sloths;
      this.sloths.date = fullDate;
    })
  }


  next() {
    //localStorage.setItem('date',)
   // debugger;
   var data =  this.model.split("_")
   var applied = JSON.parse(localStorage.getItem('roles')).applied;
   var payload ={

      'time':data[0],
      'date':data[1].split(",")[1],
      'applicantId':this.applicantId,
      'applied':applied
    };
    this.blockUI.start("confirming your appointment");
    this.scheduleService.confirmAppointment(payload).subscribe((data)=>{
      this.blockUI.stop();
      sessionStorage.setItem('profile',JSON.stringify(data));
      this.router.navigate(['/individualAppointmentConf']);
    })
  }

}