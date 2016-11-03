import { Component } from '@angular/core';
import { StaticExchangeFactory } from './service-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StaticExchangeFactory]
})
export class AppComponent {
  constructor(staticExchangeFactory: StaticExchangeFactory) {
    this._serviceModes = staticExchangeFactory.getModes();
  }
}
