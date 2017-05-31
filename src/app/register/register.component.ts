import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users:any;

  name:string='';
  lastname:string='';
  email:string='';
  password:string='';
  confirmpassword:string='';
  role:string='guest';


  constructor(
    private afAuth: AngularFireAuth,
    private serverService: ServerService,
    private router:Router
  ) { }

  ngOnInit() {

  }

  onRegisterSubmit( email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.serverService.getUsers().subscribe(users =>{
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

  }

}
