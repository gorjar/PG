import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../user';
import { ServerService } from '../server.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  users:any;

  newUser:User;

  name:string;
  lastname:string;
  email:string;
  password:string;
  confirmpassword:string;


  constructor(
    private afAuth: AngularFireAuth,
    private serverService: ServerService
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
        email: this.email
      }
    );




  }

}
