import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  public usersForm: FormGroup
  constructor( 
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router) {
      this.usersForm = this.formBuilder.group({
        nombre : [''],
        apellido : [''],
        direccion : [''],
        discapacidad : [''],
        edad: ['']

      })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.usersService.createUsers(this.usersForm.value)
    this.router.navigate(['/showUsers'])
  }
}

