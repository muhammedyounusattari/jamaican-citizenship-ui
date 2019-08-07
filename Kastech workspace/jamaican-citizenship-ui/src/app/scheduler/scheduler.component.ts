import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  private applicantId:string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((param)=>{
      this.applicantId = param.applicantId;
    })
   }

  ngOnInit() {

  }

  individualForm(){
    this.router.navigate(['/individualSchedule/'+this.applicantId]);
  }

  groupForm(){
    this.router.navigate(['/groupSchedule']);
  }
}
