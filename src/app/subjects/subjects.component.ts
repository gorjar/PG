import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { Subject } from './subject';
import * as firebase from 'firebase';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects:any;
  detailsInit:boolean =false;


  roles:any;
  currentRole:any;
  selectedSubject:Subject;
  editInit:boolean;
  initSubject: boolean;
  addedSubject: Subject;
  emptySubject:Subject = [
    '',
    ''
  ];


  constructor(
    private auth: AuthService,
    private router: Router,
    private serverService:ServerService
  ) {}

  ngOnInit() {
    if(this.auth.token == null){
      this.router.navigate((['/']));
    }

    this.getRole();

    this.serverService.getSubjects().subscribe(subjects =>{
      console.log(subjects);
      this.subjects = subjects;
    })
  }

  getRole() {
    const user = firebase.auth().currentUser.email;
    this.serverService.getCurrentUserRole(user).subscribe(
      (response: any) => (this.roles = response),
      (error) => console.log(error),
      () => {
        this.roles;
        this.currentRole=this.roles;
      });
  }

  onEditClick(subject:Subject) {
    this.editInit = true;
    this.selectedSubject = subject;
  }

  onEditSubmit(id, subject){
    this.serverService.updateSubject(id, subject);
    this.editInit=false;
  }

  onAddInit(){
    this.initSubject = true;
    this.addedSubject = this.emptySubject;
  }

  onAddSubmit(subject){
    this.serverService.addSubject(subject);
    this.initSubject=false;
  }

  onDeleteClick(id){
    this.serverService.deleteSubject(id);
  }

}
