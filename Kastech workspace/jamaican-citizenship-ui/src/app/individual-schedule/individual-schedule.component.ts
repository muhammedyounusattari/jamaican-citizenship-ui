

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BsDatepickerConfig, MonthPickerComponent } from 'ngx-bootstrap';
import { UtilityService } from '../shared/services/utility.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SchedulerService } from '../shared/services/scheduler.service';
import { Router } from '@angular/router';

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

  sloths: any;
  disabledDatesCal1: any;
  disabledDates: any;
  dates: Array<Date>;
  // bsInlineValue = new Date();
  constructor(private utilityService: UtilityService, private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private scheduleService: SchedulerService,
    private router: Router) {



  }

  ngOnInit() {

    this.disabledDates = [
      new Date('2019-08-29'),
      new Date('2019-09-30')
    ]



    // console.log(this.utilityService.enhancedDate(this.date1,0,1,0));
    this.datePickerConfig1 = Object.assign({}, {
      showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY',
      minDate: this.cal1_min,
      maxDate: this.cal1_max,
      //aysDisabled: [29,30]      // maxDate:new Date(2019,08,24)
      datesDisabled: this.holidaysDates(this.cal1_min)
    })

    this.datePickerConfig2 = Object.assign({}, {
      showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY',
      minDate: this.cal2_min,
      maxDate: this.cal2_max,
      datesDisabled: this.holidaysDates(this.cal2_min)
    })

    this.datePickerConfig3 = Object.assign({}, {
      showWeekNumbers: false, dateInputFormat: 'DD/MM/YYYY',
      minDate: this.cal3_min,
      maxDate: this.cal3_max,
      datesDisabled: this.holidaysDates(this.cal3_min)
    })


  }


  holidaysDates(calendar) {
    var month = this.utilityService.getMonth(calendar.getMonth());

    this.scheduleService.getResult().toPromise().then((data) => {
      //debugger;
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

    console.log(calendarSelected);
    if(calendarSelected == 'cal1'){
      console.log('cal1');
      this.cal2 = '';
      this.cal3 = '';
    }
    else if(calendarSelected == 'cal2'){
      console.log('cal2');
      this.cal1 = '';
      this.cal3 = '';
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
      this.sloths = data["appointment"][month.toLowerCase()][date];
      this.sloths.date = fullDate;
    })
  }


  next() {
    //localStorage.setItem('date',)
    this.router.navigate(['/individualAppointmentConf']);
  }

}