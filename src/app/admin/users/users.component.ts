import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[] = [1,2];

  constructor( private _userService:UserService ) { }

  ngOnInit() {
  }

  getUser(){
    this._spotifyService.get().subscribe();
  }


}
