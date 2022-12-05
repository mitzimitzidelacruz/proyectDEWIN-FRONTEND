import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  public get userSign(){
    return this.authService.userSign
  }
  constructor(public authService: AuthService) {
   }

  ngOnInit(): void {
  }

}
