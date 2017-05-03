import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ServerService } from '../server.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  roles = "";

  constructor(private authService: AuthService, private server: ServerService){}

  ngOnInit() {
  };

  ngAfterViewInit(){
    if(firebase.auth().currentUser != null) {
      this.getRole();
    }
  }

  getRole(){
    const user = firebase.auth().currentUser.email;
    this.server.getCurrentUserRole(user).subscribe(
        (response: any) => (this.roles = response),
        (error) => console.log(error),
        () => {
          this.roles;
        });
  }

}
