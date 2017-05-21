import { Component, OnInit, OnChanges } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  constructor(private serverService:ServerService){}


  ngOnInit() {
    this.serverService.getCurrentUserRole();

  };

  ngOnChanges() {
    this.serverService.getCurrentUserRole();

  };


}
