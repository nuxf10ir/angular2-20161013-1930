import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserFromComponent } from './add-user-from/add-user-from.component';
import {UsersService} from "./user-service.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
