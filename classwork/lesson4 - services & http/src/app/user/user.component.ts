import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})
export class UserComponent{

  serviceId: number;

  constructor(private _usersService: UsersService) {
    this.serviceId = _usersService.getId();
  }

}
