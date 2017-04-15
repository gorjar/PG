import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  student = [];
  constructor(private authService: AuthService, private serverService: ServerService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    this.student.push(email);
    const password = form.value.password;
    this.serverService.storeStudent(this.student).subscribe(
        (response) => console.log(response),
        (error) => console.log(error));
    this.authService.signUp(email, password);
  }
}
