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

  email:string='';
  emailMsg:string='';
  emailB:boolean;
  emailC:number=0;

  password: string;
  passwordMsg:string='';
  passwordB:boolean;
  passwordC:number=0;

  allValidator:boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private serverService: ServerService,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.emailValidator();
    this.passwordValidator();

  }

  allValidatorF(){
    if ( this.emailB==true || this.passwordB==true){
      this.allValidator=true
    } else {
      this.allValidator=false;
    }
  }

  emailValidator(){
    if (!this.email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      this.emailMsg='Email jest nieprawidłowy';
      this.emailB=true;
      this.emailC = this.emailC+1;
      this.allValidatorF();
    }
    else {
      this.emailMsg='';
      this.emailB=false;
      this.allValidatorF();
    }
  }

  passwordValidator(){
    if (this.password.length<6){
      this.passwordMsg='Hasło powinno zawierać conajmniej 6 znaków';
      this.passwordB=true;
      this.passwordC = this.passwordC+1;
      this.allValidatorF();
    }
    else {
      if (!this.password.match(/^[a-z0-9]+$/i)){
        this.passwordMsg='Hasło powinno składać się jedynie ze znaków alfanumerycznych';
        this.passwordB=true;
        this.passwordC = this.passwordC+1;
        this.allValidatorF();
      }
      else {
        this.passwordMsg='';
        this.passwordB=false;
        this.allValidatorF();
      }
    }
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
