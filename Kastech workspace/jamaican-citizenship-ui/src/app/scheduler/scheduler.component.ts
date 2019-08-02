import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  individualForm(){
    this.router.navigate(['/individualSchedule']);
  }

  groupForm(){
    this.router.navigate(['/groupSchedule']);
  }
}
