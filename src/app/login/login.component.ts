import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private serverService: ServerService,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {

  }

  onLoginSubmit(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);


    setTimeout(()=>{
      if(this.serverService.currentUserMail.length>2){

        this.flashMessage.show('Logowanie zakończone sukcesem',
          {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['']);
      } else {
        this.flashMessage.show('Logowanie zakończone niepowodzeniem',
          {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['login']);
      }
    },1000);

  }

}
