import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{


  constructor(
    private authService: AuthService
  ) { }

  intercept(req:any, next:any){
    const tokenizeqReq = req.clone({
      setHeaders:{
        //Con este formato me devuelve el token
        Authorization: `Bearer ${this.authService.getToken()}`
      }
     })
     return next.handle(tokenizeqReq);
  }


}