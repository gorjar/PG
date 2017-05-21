import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from'@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';


import { ServerService } from './server.service';

//import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'settings', component: SettingsComponent},
  //{path: 'chat', component: ChatComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    StudentsComponent,
    SubjectsComponent,
    ScheduleComponent,
    SettingsComponent,
    //ChatComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
