import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'
import {AuthService} from "./auth/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
    if(this.authService.token == null) {
      firebase.initializeApp({
        apiKey: "AIzaSyDx5MTX0Nd3Jft6s9mXyv2witPxkXikOdY",
        authDomain: "edzienniklekcyjny-ea2c0.firebaseapp.com"
      })
    }
  };

  logOut(){
  this.authService.logOut();
  }
}
