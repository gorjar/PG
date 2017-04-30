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

    storeStudentRole(user) {
        return this.http.post('https://edzienniklekcyjny-ea2c0.firebaseio.com/students_role.json', user)
    }

    getStudents() {
        return this.http.get('https://edzienniklekcyjny-ea2c0.firebaseio.com/students.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return Object.keys(data).map(k => data[k]);
                }
            )
    }

    getCurrentUserRole(user) {
        return this.http.get('https://edzienniklekcyjny-ea2c0.firebaseio.com/students_role.json').map(
            (response: Response) => {
                const data = response.json();
                let array = (Object.keys(data).map(k => data[k]));
                for(let i=0; i<array.length; i++){
                    for(let x in array[i]){
                        if(array[i].email === user) {
                            return array[i].role
                        }
                    }
                }
            }
        )
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