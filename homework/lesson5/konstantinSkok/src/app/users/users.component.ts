import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/merge';

import {UserInterface} from '../../shared/interfaces/User';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  // styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  public users: Observable<UserInterface[]>;
  public userForm: FormGroup;


  constructor(
    private _usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.users = this._usersService.getUsers();

    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }




  public addUser() {
    this.users = this.users.merge(Observable.from([this.userForm.value]));

    //merged.subscribe(value=> console.log(value));

    this.userForm.reset();
  }


  ngOnInit() {

  }

}
