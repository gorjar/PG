import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Subject } from './subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects:any;
  detailsInit:boolean =false;

  selectedSubject:Subject;
  editInit:boolean;
  initSubject: boolean;
  addedSubject: Subject;
  emptySubject:Subject = [
    '',
    ''
  ];

  constructor(
    private serverService:ServerService
  ) {}

  ngOnInit() {

    this.serverService.getSubjects().subscribe(subjects =>{
      this.subjects = subjects;
    })
  }

  onEditClick(subject:Subject) {
    this.editInit = true;
    this.selectedSubject = subject;
  }

  onEditSubmit(id, subject){
    this.serverService.updateSubject(id, subject);
    this.editInit = false;
  }

  onAddInit(){
    this.initSubject = true;
    this.addedSubject = this.emptySubject;
  }

  onAddSubmit(subject){
    this.serverService.addSubject(subject);
    this.initSubject = false;
  }

  onDeleteClick(id){
    this.serverService.deleteSubject(id);
  }

  CancelEdit() {
    this.editInit = false;
  }

  CancelAdd() {
    this.initSubject = false;
  }

}
