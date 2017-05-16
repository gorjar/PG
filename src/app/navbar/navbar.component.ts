import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ServerService } from '../server.service';
import * as firebase from 'firebase/app';
import Promise = firebase.Promise;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private serverService: ServerService,
    public afAuth:AngularFireAuth,
  ){}

  ngOnInit() {
  };

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  logout(){
    this.afAuth.auth.signOut();
  }


}
