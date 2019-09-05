import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-marriage-application-process-complete',
  templateUrl: './marriage-application-process-complete.component.html',
  styleUrls: ['./marriage-application-process-complete.component.css']
})
export class MarriageApplicationProcessCompleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/home']);
  }

}
