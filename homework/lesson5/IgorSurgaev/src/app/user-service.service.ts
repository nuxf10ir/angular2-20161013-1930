import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { IUser } from "../shared/intarfaces/IUser";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService {

  private _users:IUser[];

  constructor(private _http: Http) {
  }

  public getUsers(): Observable<IUser[]> {
    return this._http
        .get('http://beta.json-generator.com/api/json/get/EyUHQW_xf?delay=500')
        .map(result => this._users = (result.json() || []));
  }

  public getUsersByFilter(filterObj): Observable<IUser[]> {
    return Observable.of(this._users.filter(function (user:IUser) {
      for (var param in user) {
        let filterValue = filterObj[param].toLowerCase();
        let userValue = user[param].toLowerCase();
        if (!new RegExp(filterValue).test(userValue)) {
          return false;
        }
      }
      return true;
    }) || []);
  }

  public getUsersByValue(valuesObj): Observable<IUser[]> {
    return Observable.of(this._users.filter(function (user:IUser) {
          for (var param in valuesObj) {
            let value = valuesObj[param].toLowerCase();
            let userValue = user[param].toLowerCase();
            if (userValue !== value) {
              return false;
            }
          }
          return true;
        }) || []);
  }

  public addUser(user:IUser): void {
    this._users.push(user)
  }

}