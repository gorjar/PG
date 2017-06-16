import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  users:any;
  role:string='guest';

  constructor(
    private afAuth: AngularFireAuth,
    private serverService: ServerService,
    private router:Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      name: [''],
      lastname: [''],
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])],
    });
  }

  isEmail(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): { [s: string]: boolean } {
    if (!this.myForm) {
      return {passwordsNotMatch: true};

    }
    if (control.value !== this.myForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

  onRegisterSubmit( email, password) {
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
              name: this.myForm.value.name,
              lastname: this.myForm.value.lastname,
              email: this.myForm.value.email,
              role: this.role
            }
          );
          this.router.navigate(['']);
      }
    },2000);
  }
}
