import * as firebase from 'firebase'
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
  token: string;

  constructor(private router: Router){}

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
      this.router.navigate((['/']))}).catch(error => console.log(error));

  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      firebase.auth().currentUser.getToken().then((token: string) => this.token = token);
      this.router.navigate((['/']));
    })
      .catch(error => console.log(error));
  }

  logOut(){
    firebase.auth().signOut();
    this.token = null;
  }

  isSignIn() {
    return this.token != null;
  }
}
