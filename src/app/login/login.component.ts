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

  email: string;
  password: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private serverService: ServerService,
  ) { }

  ngOnInit() {
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
