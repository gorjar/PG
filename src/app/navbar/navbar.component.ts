import {Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private serverService: ServerService, //don't delete, used via component.html
    public afAuth:AngularFireAuth,
    private router: Router
  ){}


  ngOnInit() {
  };

  onLogout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

}
