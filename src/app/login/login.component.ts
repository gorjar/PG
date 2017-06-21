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

  showloginform:boolean=false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private serverService: ServerService,
    public flashMessage:FlashMessagesService,

  ) { }

  ngOnInit() {
    setTimeout(()=>{
      if (this.serverService.currentUserMail!='0'){this.router.navigate(['']);}
      this.showloginform=true;
    },400);
  }

  onLoginSubmit(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    this.router.navigate(['']);

    setTimeout(()=>{
      if(this.serverService.currentUserMail.length>2){

        this.flashMessage.show('Logowanie zakończone sukcesem',
          {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('Logowanie zakończone niepowodzeniem',
          {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['login']);
      }
    },1000);

  }

}
