import {
  Component, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked,
  AfterContentChecked, OnChanges, DoCheck
} from '@angular/core';
import * as firebase from 'firebase'
import {AuthService} from "./auth/auth.service";
import { ServerService } from './server.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{

  roles: any;

  constructor(private authService: AuthService, private server: ServerService){}

  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyDx5MTX0Nd3Jft6s9mXyv2witPxkXikOdY",
        authDomain: "edzienniklekcyjny-ea2c0.firebaseapp.com"
    });
  };

  ngOnChanges(){
    console.log("oninit");
  }

  logOut(){
  this.authService.logOut();
  console.log("praca");
  }

  getRole(){
    const user = firebase.auth().currentUser.email;
    this.server.getCurrentUserRole(user).subscribe(
        (roles: any) => (this.roles = roles),
        (error) => console.log(error));
        console.log(this.roles);
  }
}
