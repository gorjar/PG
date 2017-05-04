import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import { ServerService } from '../../server.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  roles: any;
  constructor(private authService: AuthService, private serverService: ServerService, private router: Router) { }

  ngOnInit() {
    if (this.authService.token == null) {
      this.router.navigate((['/']));
    }
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const rola = form.value.rola;
    const user = {email: email, role: rola};
    if(rola!==""){
      if(confirm("Potwierdź rolę użytkownika: " + email + "\n\n Wybrana rola: " + rola)==true) {
        this.serverService.storeStudentRole(user).subscribe(
          (response) => console.log(response),
          (error) => console.log(error));
        this.authService.signUp(email, password);
      }
    }
  }

  getRole() {
    const user = firebase.auth().currentUser.email;
    this.serverService.getCurrentUserRole(user).subscribe(
        (response: any) => (this.roles = response),
        (error) => console.log(error),
        () => {
          this.roles;
        });
  }
}
