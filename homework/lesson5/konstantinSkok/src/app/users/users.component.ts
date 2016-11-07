import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

import {Observable} from 'rxjs';


import {UserInterface} from '../../shared/interfaces/User';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  // styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent {
  public users: UserInterface[];
  public userForm: FormGroup;
  public pipesForm: FormGroup;

  constructor(
    private _usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this._usersService.getUsers().subscribe(
      (users) => {this.users = users; }
    );

    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });

    this.pipesForm = this.formBuilder.group({
      name: [''],
      age: ['']
    });
  }


  public addUser() {
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }


}



