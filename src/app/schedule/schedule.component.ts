import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { Schedule } from './schedule';
import * as firebase from 'firebase';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


  currentRole:any ='sekretarka';
  schedule:any;
  selectedSched: Schedule;
  editInit:boolean;
  initSched: boolean;
  addedSched: Schedule;
  emptySched:Schedule = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];


  constructor(
    private router: Router,
    private serverService:ServerService
  ) {}

  ngOnInit() {
    this.serverService.getSchedule().subscribe(schedule =>{
      console.log(schedule);
      this.schedule = schedule;
    })
  }


  onEditClick(sched: Schedule) {
    this.editInit = true;
    this.selectedSched = sched;
  }

  onEditSubmit(id, sched){
    this.serverService.updateSched(id, sched);
    this.editInit=false;
  }

  onAddInit(){
    this.initSched = true;
    this.addedSched = this.emptySched;
}

  onAddSubmit(sched){
    this.serverService.addSched(sched);
    this.initSched=false;
  }

  onDeleteClick(id){
    this.serverService.deleteShed(id);
  }

}
