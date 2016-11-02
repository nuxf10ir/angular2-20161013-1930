import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService {

  private id = 0;

  constructor(private _http: Http) {
    this.id = Math.floor(Math.random());
  }

  public getId() {
    return this.id;
  }

  public getAll(): Observable<any[]> {
    return this._http
      .get('https://learn.javascript.ru/courses/groups/api/participants?key=plcj7l')
      .map(result => result.json().filter(user => !!user.photo))
      //.switchMap(users => Observable.of(users));
      // в данном случае это даже не нужно, так как массив предоставляется сразу (не как последовательность)
  }

}
