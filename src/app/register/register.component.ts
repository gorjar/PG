import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onSubmit(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    console.log('ok');
  }

}
