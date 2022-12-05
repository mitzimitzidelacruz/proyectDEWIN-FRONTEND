import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  public editUsersForm : FormGroup
  usersRef: any


  constructor( public usersService: UsersService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router:Router
    ) {
      this.editUsersForm = this.formBuilder.group({
        nombre : [''],
        apellido : [''],
        direccion : [''],
        discapacidad : [''],
        edad : [''],


      })
    }

  ngOnInit(): void { const id= this.activeRoute.snapshot.paramMap.get('id')
  this.usersService.getUsersById(id).subscribe(res =>{
    this.usersRef = res
    this.editUsersForm = this.formBuilder.group({
      nombre : [this.usersRef.nombre],
    apellido : [this.usersRef.apellido],
    direccion : [this.usersRef.direccion],
    discapacidad : [this.usersRef.discapacidad],
    edad : [this.usersRef.edad],


    })
  })
}
onSubmit (){
const id= this.activeRoute.snapshot.paramMap.get('id')
this.usersService.updateUsers(this.editUsersForm.value,id)
this.router.navigate(['/showUsers'])
}
}
