import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx.js';

import { AppComponent } from './app.component';
import { SelectedDirective } from './selected.directive';
import { FixedPipe } from './fixed.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SelectedDirective,
    FixedPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
	  AppComponent,

	  ]
})
export class AppModule { }
