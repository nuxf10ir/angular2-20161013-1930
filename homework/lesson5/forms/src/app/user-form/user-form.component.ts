import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { User } from '../users.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  email: AbstractControl;
  nickname: AbstractControl;
  age: AbstractControl;

  @Output() userSubmitted = new EventEmitter();
  @Input() checkUser: Function; 

  constructor(fb: FormBuilder) {
    this.checkIfUserCreated = this.checkIfUserCreated.bind(this);

    this.userForm = fb.group({
        email: ["", Validators.minLength(5)],
        nickname: ["", [Validators.minLength(4), Validators.required], this.checkIfUserCreated],
        age: ["", minimalAgeValidator(18)]
    });

    this.email = this.userForm.controls['email'];  
    this.nickname = this.userForm.controls['nickname'];  
    this.age = this.userForm.controls['age'];  
  }

  checkIfUserCreated(nicknameControl){
    const nickname = nicknameControl.value;
    return this.checkUser(nickname);
  }

  createUser(event) {
    event.preventDefault();

    if(this.userForm.valid) {
        const userData: User = this.userForm.value;
        this.userSubmitted.emit(userData);
        this.userForm.reset();
    }
  }
}

function minimalAgeValidator(age:Number){
    return function minimalAge(control: FormControl) {
      return control.value > age ? null : { minAge: age};
    }
}
