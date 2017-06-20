import {Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ServerService } from '../server.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    public serverService: ServerService, //don't delete, used within component.html
    public afAuth:AngularFireAuth,
    public flashMessage:FlashMessagesService
  ){}


  ngOnInit() {
  };

  onLogout(){
    this.serverService.currentUserMail='';
    this.serverService.currentUserRole='';
    this.afAuth.auth.signOut();
    this.flashMessage.show('Nastąpiło poprawne wylogowanie',
      {cssClass: 'alert-success', timeout: 3000});
  }

}
