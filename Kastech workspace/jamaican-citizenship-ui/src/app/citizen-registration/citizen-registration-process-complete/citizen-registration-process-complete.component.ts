import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-citizen-registration-process-complete',
  templateUrl: './citizen-registration-process-complete.component.html',
  styleUrls: ['./citizen-registration-process-complete.component.css']
})
export class CitizenRegistrationProcessCompleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/home']);
  }

}
