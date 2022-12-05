import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    userName: '',
    userLastName: '',
    email: '',
    password: '',
    rol: 'User'
  }

  passSecury = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }

  ngOnInit(): void {

  }
  singUp() {
    if(this.passSecury.test(this.user.password)){
      console.log("Contraseña correctisima")
    }else{
      alert("Debe contar con mayúsculas, minúsculas y carácteres especiales")
      return;
    }
  this.authService.signUp(this.user)
  .subscribe(
    res => {
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/home']);
    },
    err => console.log(err)
  )}

}