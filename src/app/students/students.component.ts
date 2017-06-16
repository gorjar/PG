import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any;
  detailsInit:boolean =false;

  selectedStudent:Student;
  editInit:boolean;
  initStudent: boolean;
  addedStudent: Student;
  emptyStudent:Student = {
    name:'',
    lastname:'',
    email:''
  };

  constructor(
    public serverService:ServerService
  ) {}

  ngOnInit() {
    this.serverService.getStudents().subscribe(students =>{
      this.students = students;
    })
  }

  onEditClick(student:Student) {
    this.editInit = true;
    this.selectedStudent = student;
  }

  onEditSubmit(id, student){
    this.serverService.updateStudent(id, student);
    this.editInit=false;
  }

  onAddInit(){
    this.initStudent = true;
    this.addedStudent = this.emptyStudent;
  }

  onAddSubmit(student){
    this.serverService.addStudent(student);
    this.initStudent=false;
  }

  onDeleteClick(id){
    this.serverService.deleteStudent(id);
  }

  CancelEdit() {
    this.editInit=false;
    this.serverService.getStudents().subscribe(students =>{
      this.students = students;
    })
  }

  CancelAdd() {
    this.initStudent=false;
  }

}
