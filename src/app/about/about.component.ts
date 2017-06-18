import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service'; //used within html

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
