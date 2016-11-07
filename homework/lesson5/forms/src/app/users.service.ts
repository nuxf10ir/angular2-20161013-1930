import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface User {
    nickname: String;
    email: String;
    age: Number;
}

const defaultUsers: User[] = [{
    nickname: 'UserA',
    email: 'alex@yandex.ru',
    age: 24
}, {
    nickname: 'UserB',
    email: 'kroll22@gmail.com',
    age: 19
}];

@Injectable()
export class UsersService {

  public userList:BehaviorSubject<User[]> = new BehaviorSubject(defaultUsers);

  public save(userData: User) {
    const oldValue = this.userList.getValue()

    this.userList.next(oldValue.concat(userData));
  }

  public checkIfNicknameUsed(nickname: String) {
    const oldValue = this.userList.getValue();

    const nicknameIsBusy = oldValue.find((user: User) =>
        user.nickname.toLowerCase() === nickname.toLowerCase()
    );

    return nicknameIsBusy;
  }

}
