import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ServerService } from '../server.service';




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

  onLogout(){
    this.afAuth.auth.signOut();
    console.log('ok');
  }


}
