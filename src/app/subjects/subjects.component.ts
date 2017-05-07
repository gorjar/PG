import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects:any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private serverService:ServerService
  ) {}

  ngOnInit() {
    if(this.auth.token == null){
      this.router.navigate((['/']));
    }

    this.serverService.getSubjects().subscribe(subjects =>{
      console.log(subjects);
      this.subjects = subjects;
    })
  }
}
