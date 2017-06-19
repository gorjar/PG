import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit {


  users:any;

  name:string='';
  nameMsg:string;
  nameB:boolean;

  lastname:string='';
  lastnameMsg:string;
  lastnameB:boolean;

  email:string='';
  emailMsg:string='';
  emailB:boolean;

  password:string='';
  passwordMsg:string='';
  passwordB:boolean;

  confirmpassword:string='';
  confirmpasswordMsg:string='';
  confirmpasswordB:boolean;


  allValidator:boolean;

  role:string='guest';

  constructor(
    private afAuth: AngularFireAuth,
    private serverService: ServerService,
    private router:Router,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.nameValidator();
    this.lastnameValidator();
    this.emailValidator();
    this.passwordValidator();
    this.confirmpasswordValidator();

  }

  nameValidator(){
    if (this.name.length<3){
      this.nameMsg='Imię jest za krótkie';
      this.nameB=true;
      this.allValidatorF();
    }
    else {
      this.nameMsg='';
      this.nameB=false;
      this.allValidatorF();
    }
  }

  lastnameValidator(){
    if (this.lastname.length<3){
      this.lastnameMsg='Nazwisko jest za krótkie';
      this.lastnameB=true;
      this.allValidatorF();
    }
    else {
      this.lastnameMsg='';
      this.lastnameB=false;
      this.allValidatorF();
    }
  }

  emailValidator(){
    if (this.email.length<3){
      this.emailMsg='Email jest nieprawidłowy';
      this.emailB=true;
      this.allValidatorF();
    }
    else {
      this.emailMsg='';
      this.emailB=false;
      this.allValidatorF();
    }
    if (!this.email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      this.emailMsg='Email jest nieprawidłowy';
      this.emailB=true;
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
      this.passwordMsg='Hasło jest za krótkie';
      this.passwordB=true;
      this.allValidatorF();
    }
    else {
      this.passwordMsg='';
      this.passwordB=false;
      this.allValidatorF();
    }
  }

  confirmpasswordValidator(){
    if (this.confirmpassword.length<6){
      this.confirmpasswordMsg='Hasło jest za krótkie';
      this.confirmpasswordB=true;
      this.allValidatorF();
    }
    else {
      if(!(this.confirmpassword==this.password)){
        this.confirmpasswordMsg='Hasła są niezgodne';
        this.confirmpasswordB=true;
        this.allValidatorF();
      } else {
      this.confirmpasswordMsg='';
      this.confirmpasswordB=false;
      this.allValidatorF();
      }
    }
  }


  allValidatorF(){
    if (this.nameB == true || this.lastnameB==true || this.emailB==true || this.passwordB==true || this.confirmpasswordB==true){
      this.allValidator=true
    } else {
      this.allValidator=false;
    }
  }


  onRegisterSubmit( email, password) {
    if (this.password === this.confirmpassword){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        //console.log(error);
        var errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage == "Password should be at least 6 characters") {
          alert('Hasło powinno składać się z co najmniej 6 znaków');
        }
        if (errorMessage == "The email address is already in use by another account.") {
          alert('Podany adres e-mail jest już używany przez innego użytkownika');
        }
        if (errorMessage == "The email address is badly formatted.") {
          alert('Podany adres e-mail jest nieprawidłowy');

        }
      });
    setTimeout(()=>{
      if(this.serverService.currentUserMail.length>2){
          this.serverService.getUsers().subscribe(users => {
            console.log(users);
            this.users = users;
          });
          this.serverService.addUser(
            {
              name: this.name,
              lastname: this.lastname,
              email: this.email,
              role: this.role
            }
          );
          this.router.navigate(['']);
          this.flashMessage.show('Rejestracja zakończona sukcesem',
            {cssClass: 'alert-success', timeout: 3000});
      }
    },2000);
  }
  else{
      alert('Podane hasła są niezgodne');
    }
  }
}
