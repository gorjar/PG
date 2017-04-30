import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServerService } from '../server.service';
import * as firebase from 'firebase'
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{

  roles:any;

  constructor(private authService: AuthService, private serverService: ServerService){}

  ngOnInit() {
  };

  ngAfterViewInit(){
    if(firebase.auth().currentUser != null) {
      this.getRole();
    }
  }

  getRole() {
    const user = firebase.auth().currentUser.email;
    console.log(user);
    this.serverService.getCurrentUserRole(user).subscribe(
        (response: any) => (this.roles = response),
        (error) => console.log(error),
        () => {
          this.roles;
          console.log(this.roles);
        });
  }
}
