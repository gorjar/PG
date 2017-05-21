import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  lastname:string;
  email: string;
  password: string;

  newUser: User;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onRegisterSubmit(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    console.log(this.name);
    console.log(this.lastname);
    console.log(this.email);
  }

}
