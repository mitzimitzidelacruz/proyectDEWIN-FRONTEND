import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './components/carrers/careers.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

import { ShowComponent } from './components/show/show.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { AuthGuard } from './auth.guard';

import { ShowUsersComponent } from './components/show-users/show-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
const routes: Routes = [

{path: '', redirectTo: '/login',
pathMatch: 'full'},
//ruta que necesita validacion
{path: 'private', component:PrivateTasksComponent, canActivate: [AuthGuard]},
{path: 'tasks', component: TasksComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'home', component: HomeComponent},
{path: 'careers', component: CareersComponent},
{path: 'show', component: ShowComponent},
{path: 'create', component: CreateComponent},
{path: 'edit/:id', component: EditComponent},
{path: 'showUsers', component: ShowUsersComponent},
{path: 'createUsers', component: CreateUsersComponent},
{path: 'editUsers/:id', component: EditUsersComponent},





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
