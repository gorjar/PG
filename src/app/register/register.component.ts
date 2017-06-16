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
    private fb: FormBuilder
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
    if (!control.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
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

  onRegisterSubmit( email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.serverService.getUsers().subscribe(users =>{
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

}
