import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL= 'http://localhost:3000/api/'

  public userSign;

  constructor(private http: HttpClient, private router:Router) {

    this.userSign = localStorage.getItem('rol');
   }

  signUp(user: any){
   return this.http.post<any>(this.URL + 'signUp', user);
  }

  signIn(user: any){
    return this.http.post<any>(this.URL + 'signIn', user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');

    this.router.navigate(['/login'])
  }
}
