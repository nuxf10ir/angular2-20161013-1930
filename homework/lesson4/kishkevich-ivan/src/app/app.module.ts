import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StaticConverterModule } from './static-converter/static-converter.module';
import { RealConverterModule } from './real-converter/real-converter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StaticConverterModule,
    RealConverterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
