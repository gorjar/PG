import {Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    public serverService: ServerService, //don't delete, used within component.html
    public afAuth:AngularFireAuth
  ){}


  ngOnInit() {
  };

  onLogout(){
    this.serverService.currentUserMail='';
    this.serverService.currentUserRole='';
    this.afAuth.auth.signOut();
  }

}
