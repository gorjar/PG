"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("firebase");
var ChatComponent = (function () {
    function ChatComponent(server, auth, router, http) {
        this.server = server;
        this.auth = auth;
        this.router = router;
        this.http = http;
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        if (this.auth.token == null) {
            this.router.navigate((['/']));
        }
        this.getMess();
    };
    ChatComponent.prototype.onSend = function (form) {
        var student = firebase.auth().currentUser.email;
        var message = form.value.message;
        var date = new Date();
        this.messages.push({ author: student, time: date, text: message });
        this.server.onSend(this.messages).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        this.getMess();
    };
    ChatComponent.prototype.getMess = function () {
        //this.server.getMessages().subscribe(
        //    (messages: any[]) => this.messages = messages,
        //    (error) => console.log(error));
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'app-settings',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css']
    })
], ChatComponent);
exports.ChatComponent = ChatComponent;
