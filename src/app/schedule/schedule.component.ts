import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private serverService:ServerService
  ) {}

  ngOnInit() {
    if(this.authService.token == null){
      this.router.navigate((['/']));
    }

    this.serverService.getSchedule().subscribe(schedule =>{
      console.log(schedule);
      this.schedule = schedule;
    })

  }

}
