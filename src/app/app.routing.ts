import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from "./auth/signup/signup.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'signup', component: SignupComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
