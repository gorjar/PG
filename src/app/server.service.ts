import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Schedule } from './schedule/schedule';
import { Subject } from './subjects/subject';
import { User } from './user';


@Injectable()
export class ServerService {

  subjects: FirebaseListObservable<any[]>;
  schedule: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;

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

  getUsers(){
    this.users=this.af.list('/users') as FirebaseListObservable<User[]>;
    return this.users;
  }


  addSubject(subject){
    return this.subjects.push(subject);
  }

  addSched(sched){
    return this.schedule.push(sched);
  }

  addUser(user){
    return this.users.push(user);
  }


  updateSubject(id, subject){
    return this.subjects.update(id,subject);
  }

  updateSched(id, sched){
    return this.schedule.update(id,sched);
  }

  updateUser(id, user){
    return this.users.update(id,user);
  }


  deleteSubject(id){
    return this.subjects.remove(id);
  }

  deleteShed(id){
    return this.schedule.remove(id);
  }

  deleteUser(id){
    return this.users.remove(id);
  }

}
