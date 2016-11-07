import { Component, OnInit } from '@angular/core';

import { UsersService, User } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
    public userList: User[];
    private usersService: UsersService;

    constructor(usersService: UsersService) {
        this.usersService = usersService;
        this.checkUser = this.checkUser.bind(this);
    }

    ngOnInit() {
        // I suspect me can handle it simpler though
        this.usersService.userList.subscribe(updatedList => {
            this.userList = updatedList;
        });
    }

    public saveUser(userToSave: User) {
        this.usersService.save(userToSave);
    }

    public checkUser(nickname: String) {
        const nicknameIsUsed = this.usersService.checkIfNicknameUsed(nickname);

        // aka request on server
        return Promise.resolve (
            nicknameIsUsed ? { nicknameIsUsed: true } : null
        )
    }
}
