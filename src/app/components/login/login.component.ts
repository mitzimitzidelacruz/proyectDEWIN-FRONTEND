import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  singIn() {
    this.authservice.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          console.log("Resultado",res);
        if(res.user.rol == 'Admin'){
          console.log("Tienes permiso de: ", res.user.rol)
        }
        localStorage.setItem('token', res.token);
        localStorage.setItem('correo', res.user.email);
        localStorage.setItem('rol', res.user.rol);
        this.router.navigate(['/home']);
        alert("Se ha iniciado sesión exitosamente");
      },
      err => {
        console.log(err)
        alert("Falló el inicio de sesión");
    }
    )
  }
}
