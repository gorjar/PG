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

  constructor(
    public serverService:ServerService
  ) {}

  ngOnInit() {
    this.serverService.getSchedule().subscribe(schedule =>{
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
    this.addedSched = {
      date:'',
      duration:'',
      lecturer:'',
      room:'',
      subject:'',
      time:'',
      type:''
    };
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
    this.serverService.getSchedule().subscribe(schedule =>{
      this.schedule = schedule;
    })
  }

  CancelAdd(){
    this.initSched = false;
  }

}
