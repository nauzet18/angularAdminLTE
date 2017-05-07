import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  user:User;

  constructor( private _userService:UserService ) { }

  ngOnInit() {
    this._userService.getAll().subscribe();
  }

  getUser(id: number){
    this._userService.get(id).subscribe( data => this.users = data );
    this._userService.get(id).subscribe( data => this.user = data );
  }


}
