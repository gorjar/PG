import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string='';
  emailMsgL:string='';
  emailBL:boolean;
  emailCL:number=0;

  password:string='';
  passwordMsgL:string='';
  passwordBL:boolean;
  passwordCL:number=0;

  allValidatorL:boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private serverService: ServerService,
  ) { }

  ngOnInit() {
    this.emailValidatorL();
    this.passwordValidatorL();

  }

  allValidatorF(){
    if ( this.emailBL==true || this.passwordBL==true){
      this.allValidatorL=true
    } else {
      this.allValidatorL=false;
    }
  }

  emailValidatorL(){
    if (!this.email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      this.emailMsgL='Email jest nieprawidłowy';
      this.emailBL=true;
      this.emailCL = this.emailCL+1;
      this.allValidatorF();
    }
    else {
      this.emailMsgL='';
      this.emailBL=false;
      this.allValidatorF();
    }
  }

  passwordValidatorL(){
    if (this.password.length<6){
      this.passwordMsgL='Hasło powinno zawierać conajmniej 6 znaków';
      this.passwordBL=true;
      this.passwordCL = this.passwordCL+1;
      this.allValidatorF();
    }
    else {
      if (!this.password.match(/^[a-z0-9]+$/i)){
        this.passwordMsgL='Hasło powinno składać się jedynie ze znaków alfanumerycznych';
        this.passwordBL=true;
        this.passwordCL = this.passwordCL+1;
        this.allValidatorF();
      }
      else {
        this.passwordMsgL='';
        this.passwordBL=false;
        this.allValidatorF();
      }
    }
  }

  onLoginSubmit(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);

    setTimeout(()=>{
      if(this.serverService.currentUserMail.length>2){
        this.router.navigate(['']);
      } else {
        this.router.navigate(['login']);
      }
    },1000);

  }
}
