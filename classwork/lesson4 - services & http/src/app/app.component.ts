import { Component } from '@angular/core';
//import { Users } from './users';
import { UsersService } from './users.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'app works!';
  users: Observable<any[]>;
  serviceId: number;

  //private _users: Users;

  constructor(private _userService: UsersService) {

    this.users =  this._userService.getAll();
    this.serviceId = this._userService.getId();
  }

}
