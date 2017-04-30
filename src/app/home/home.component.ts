import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServerService } from '../server.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  roles = "";

  constructor(private authService: AuthService, private server: ServerService){}

  ngOnInit() {
  };

  ngAfterViewInit(){
    if(firebase.auth().currentUser != null) {
      this.getRole();
    }
  }

  logOut(){
    this.authService.logOut();
    console.log("praca");
  }

  getRole(){
    const user = firebase.auth().currentUser.email;
    console.log(user);
    this.server.getCurrentUserRole(user).subscribe(
        (response: any) => (this.roles = response),
        (error) => console.log(error),
        () => {
          this.roles;
          console.log(this.roles);
        });

  }

}
