import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {UserInterface} from '../shared/interfaces/User';
import {FormControl} from '@angular/forms';


@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  public getUsers(): Observable<UserInterface[]> {
    return this._http.get('/assets/users.json')
      .map(response => response.json());
  }

  public uniqueEmailValidator(control: FormControl) {
    let email = control.value.trim().toLowerCase();
    return this.getUsers()
      .map(users => {
        let elem = users.find((element: UserInterface) => {
          return element.email.toLowerCase() === email;
        });

        return elem ? { uniqueEmail: true} : null;
      });
  }
}
