import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';
import { AngularFireDatabase,  FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Student } from './students/student';
import { Schedule } from './schedule/schedule';
import { Subject } from './subjects/subject';
import { User } from './user';
import auth = firebase.auth;


@Injectable()
export class ServerService {

  students: FirebaseListObservable<any[]>;
  subjects: FirebaseListObservable<any[]>;
  schedule: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  currentUserMail:string;
  currentUserRole:string;

  constructor(private http: Http, private af:AngularFireDatabase, private afAuth:AngularFireAuth) {
  }

  getCurrentUserRole() {

    this.afAuth.authState.subscribe(auth =>{
      if (auth != null){
        this.currentUserMail = auth.email;
        this.getUsers().subscribe(users =>{
          for (let user of users){
            if (this.currentUserMail===user.email) {this.currentUserRole=user.role}
          }
        });
      }
    });
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

  getStudents(){
    this.students=this.af.list('/students') as FirebaseListObservable<Student[]>;
    return this.students;
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


  addStudent(student){
    return this.students.push(student);
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


  updateStudent(id, student){
    return this.students.update(id,student);
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


  deleteStudent(id){
    return this.students.remove(id);
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
