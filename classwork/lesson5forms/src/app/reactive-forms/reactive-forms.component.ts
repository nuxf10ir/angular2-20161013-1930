import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {Observable} from 'rxjs/observable';
import 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public username = new FormControl('initial value',
                                    [Validators.minLength(5), myValidator],
                                    [myAsyncValidator]);
  // public newFormGroup = new FormGroup({
  //   dateRange: new FormGroup({
  //     from: new FormControl(),
  //     to: new FormControl()
  //   })
  // });
  //
  // constructor(formBuilder: FormBuilder) {
  //   this.registrationForm = formBuilder.group({
  //     'username': [''],
  //      passwordGroup: formBuilder.group({
  //        'password': [''],
  //        'pconfimation': ['']
  //      })
  //   })
  //
  // }

  ngOnInit() {
    this.username.valueChanges
    //.debounceTime(500)
    //.switchMap(value => this._userService.getUsersByFilter(value))
      .subscribe(value => console.log(this.username.errors));

  }
}


function myValidator(control: FormControl) {
  return control.value.length > 5 ? null : { minLength: true};
}

function myAsyncValidator(control: FormControl) {
  return Observable.of(control.value.length > 5 ? null : { minAsyncLength: true}).delay(500);
}