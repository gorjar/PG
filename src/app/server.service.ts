import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Schedule } from './schedule/schedule';
import { Subject } from './subjects/subject';


@Injectable()
export class ServerService {

  subjects: FirebaseListObservable<any[]>;
  schedule: FirebaseListObservable<any[]>;

    constructor(private http: Http, private af:AngularFireDatabase) {
    }

    storeStudentRole(user) {
        return this.http.post('https://edzienniklekcyjny-ea2c0.firebaseio.com/users.json', user)
    }

    getStudents() {

        let students = [];
        return this.http.get('https://edzienniklekcyjny-ea2c0.firebaseio.com/users.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    let array = Object.keys(data).map(k => data[k]);
                    for(let i=0; i<array.length; i++) {
                        if(array[i].role === "student") {
                            students.push(array[i].email)
                        }
                    }
                    return students
                }
            )
    }

    getCurrentUserRole(user) {
        return this.http.get('https://edzienniklekcyjny-ea2c0.firebaseio.com/users.json').map(
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

  getSubjects(){
    this.subjects=this.af.list('/subjects') as FirebaseListObservable<Subject[]>;
    return this.subjects;
  }

  getSchedule(){
    this.schedule=this.af.list('/schedule') as FirebaseListObservable<Schedule[]>;
    return this.schedule;
  }

  addSched(sched){
    return this.schedule.push(sched);

  }

  updateSched(id, sched){

    return this.schedule.update(id,sched);

  }

  deleteShed(id){
    return this.schedule.remove(id);


  }
}





