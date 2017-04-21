import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private server: ServerService) {}
  students = [];
  ngOnInit() {
    if (this.auth.token == null) {
      this.router.navigate((['/']));
    }
    this.listStudents()
  }

  listStudents(){
    this.server.getStudents()
        .subscribe(
        (students: any[]) => (this.students = students),
        (error) => console.log(error));
  }

}
