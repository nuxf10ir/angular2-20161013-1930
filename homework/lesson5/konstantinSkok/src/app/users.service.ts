import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {UserInterface} from '../shared/interfaces/User';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  public getUsers(): Observable<UserInterface[]> {
    return this._http.get('/assets/users.json')
      .map(response => response.json()); }
}
