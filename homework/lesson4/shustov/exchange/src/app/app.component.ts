import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/switchMap';

import { ExchangeService } from './exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExchangeService]
})
export class AppComponent {
  activeCurrency: Subject<any>;
  inputCount: Subject<any>;
  exhangeRate: Observable<number>;

  totalValue: Observable<number>;

  currencies = ['USD', 'RUB', 'JPY', 'PLN']

  constructor(private _exhangeService: ExchangeService) {
    this.activeCurrency = new Subject();
    this.inputCount = new Subject();

    this.exhangeRate = this.activeCurrency
      .switchMap(this._exhangeService.getRatesFor)

    this.totalValue = Observable.combineLatest(
      this.exhangeRate,
      this.inputCount,
      (rate = 0, count = 0) => Math.round(rate * count)
    )
  }

  onCurrencySelect(value){
    this.activeCurrency.next(value);
  }

  onChangeCount(value) {
    const normalizedValue = parseFloat(value);
    this.inputCount.next(normalizedValue);
  }
}
