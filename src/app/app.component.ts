import {
  Component, OnInit
} from '@angular/core';
import * as firebase from 'firebase'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyDx5MTX0Nd3Jft6s9mXyv2witPxkXikOdY",
        authDomain: "edzienniklekcyjny-ea2c0.firebaseapp.com"
    });
  };
}
