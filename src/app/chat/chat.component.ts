import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-settings',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat: any;
  text: string;
  datetime: any;
  author: string;

  constructor(public serverService: ServerService) {}

    ngOnInit() {
      this.serverService.getChat().subscribe(chat =>{
        this.chat = chat;
      })
    }

  onSubmit() {
    this.datetime = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    if (this.text) {
    this.serverService.addMessage(
      {
        text: this.text,
        author: this.serverService.currentUserMail,
        datetime: this.datetime
      }
    );
    this.text = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
  window.scrollTo(0, document.body.scrollHeight);
  }

  onDeleteClick(id) {
    this.serverService.deleteMessage(id);
    window.scrollTo(0, document.body.scrollHeight);
  }
}