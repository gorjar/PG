import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Schedule } from './schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule:any;
  selectedSched: Schedule;
  editInit:boolean;
  initSched: boolean;
  addedSched: Schedule;
  emptySched:Schedule = {
    date:'',
    duration:'',
    lecturer:'',
    room:'',
    subject:'',
    time:'',
    type:''
  };


  constructor(
    public serverService:ServerService
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
    this.editInit = false;
  }

  onAddInit(){
    this.initSched = true;
    this.addedSched = this.emptySched;
}

  onAddSubmit(sched){
    this.serverService.addSched(sched);
    this.initSched = false;
  }

  onDeleteClick(id){
    this.serverService.deleteShed(id);
  }

  CancelEdit(){
    this.editInit = false;
  }

  CancelAdd(){
    this.initSched = false;
  }

}
