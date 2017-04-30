import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private server: ServerService) {}
  students = [];
  roles: any;
  ngOnInit() {
    if (this.auth.token == null) {
      this.router.navigate((['/']));
    }
    this.listStudents();
    this.roles = this.getRole();
  }

  listStudents(){
    this.server.getStudents()
        .subscribe(
        (students: any[]) => (this.students = students),
        (error) => console.log(error));
  }

  getRole(){
    const user = firebase.auth().currentUser.email;
    this.server.getCurrentUserRole(user).subscribe(
        (roles: any) => (this.roles = roles),
        (error) => console.log(error));
  }
}
