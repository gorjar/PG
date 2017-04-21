import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class ServerService {

    constructor(private http: Http) {
    }

    storeStudent(student: any[]) {
        return this.http.post('https://edzienniklekcyjny-ea2c0.firebaseio.com/students.json', student)
    }

    getStudents() {
        return this.http.get('https://edzienniklekcyjny-ea2c0.firebaseio.com/students.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return Object.keys(data).map(k => data[k]);
                }
            );
    }

    onSend(message) {
        return this.http.post('https://edzienniklekcyjny-ea2c0.firebaseio.com/chat.json', message);
    }

    getMessages(){
        return this.http.get('https://edzienniklekcyjny-ea2c0.firebaseio.com/chat.json')
        .map(
            (response: Response) => {
                const chat = response.json();
                return chat;
            }
        )
    }
}