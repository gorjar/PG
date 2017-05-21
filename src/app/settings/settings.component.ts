import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  users:any;
  currentRole:any = 'sekretarka';

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getUsers().subscribe(users =>{
      console.log(users);
      this.users = users;
    })

  }

}
