import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControlName, Validator } from '@angular/forms';
import { IUser } from "../../shared/intarfaces/IUser";
import { UsersService } from "../user-service.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})



export class UsersListComponent {

  public users:Observable<IUser[]>;

  public filtersForm;

  constructor(private _formBuilder: FormBuilder, private _usersService: UsersService) {

    this.getUsers();

    this.filtersForm = this._formBuilder.group({
        'nickname': [''],
        'lastname': [''],
        'firstname': ['']
    });

    this.filtersForm.valueChanges
        .subscribe(filters => this.getUsersByFilters(filters));

  };

  getUsers() {
    this._usersService.getUsers()
        .startWith(null)
        .subscribe(users => this.users = Observable.of(users));
  }

  getUsersByFilters(filters) {
    this._usersService.getUsersByFilter(filters)
        .startWith(null)
        .subscribe(filteredUsers => this.users = Observable.of(filteredUsers));
  }



}
