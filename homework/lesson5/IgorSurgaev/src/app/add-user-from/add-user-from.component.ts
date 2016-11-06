import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControlName, FormControl, Validators} from '@angular/forms';
import { IUser } from "../../shared/intarfaces/IUser";
import { UsersService } from "../user-service.service";
import { Observable } from 'rxjs';
import {controlNameBinding} from "@angular/forms/src/directives/reactive_directives/form_control_name";
import {delay} from 'rxjs/operator/delay'

@Component({
  selector: 'app-add-user-from',
  templateUrl: './add-user-from.component.html'
})

export class AddUserFromComponent {

  public addUser;

  constructor(private _formBuilder: FormBuilder, private _usersService: UsersService) {

    this.addUser = this._formBuilder.group({
      'nickname': ['', [Validators.required, Validators.minLength(3)], [uniqueAsync.bind(this)]],
      'lastname': [''],
      'firstname': ['', [Validators.required]]
    });

    function uniqueAsync(control: FormControl) {
      return this._usersService.getUsersByValue({nickname: control.value}).switchMap(users => {
        return Observable.of(!users.length ? null : {
          asyncValidator: {
            valid: !users.length
          }
        })
      });
    }

  };

  onSubmit() {
    this._usersService.addUser(this.addUser.value);
    this.addUser.controls.nickname.updateValueAndValidity(true, true);

  }





}
