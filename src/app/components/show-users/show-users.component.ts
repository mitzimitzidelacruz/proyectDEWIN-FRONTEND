import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
Users: Users[]
  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
 // console.log(this.postService.getPosts())
 this.usersService.getUsers().subscribe(async (res) =>{
  this.Users = await res.map ((e) =>{
   // console.log(res);
    return{
      id: e.payload.doc.id,
      ...(e.payload.doc.data() as Users)
    };
  });
});
}
deleteRow = (users) => this.usersService.deleteUsers(users);
}
