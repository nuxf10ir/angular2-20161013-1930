import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';

interface IExchangeStore {
  base: string;
  date: string;
  rates: Object;
}

interface IServiceExchange {
  staticStore: IExchangeStore;
  baseCurrency: string;
  getCurrencyList(): Observable<String[]>;
  convert(value: number, from: string, to: string): Observable<number>;
}

export enum Mode {
  API,
  STATIC
}

@Injectable()
export class ExchangeService implements IServiceExchange {
  private _mode: Mode
  staticStore = {
    base: "EUR",
    date: "2000-01-03",
    rates: {
      AUD: 1.5346,
      CAD: 1.4577,
      CHF: 1.6043,
      CYP: 0.5767,
      CZK: 36.063,
      DKK: 7.4404,
      EEK: 15.6466,
      GBP: 0.6246,
      HKD: 7.8624,
      HUF: 254.53,
      ISK: 73.03,
      JPY: 102.75,
      KRW: 1140.02,
      LTL: 4.0454,
      LVL: 0.5916,
      MTL: 0.4151,
      NOK: 8.062,
      NZD: 1.9331,
      PLN: 4.1835,
      ROL: 18273,
      SEK: 8.552,
      SGD: 1.6769,
      SIT: 198.8925,
      SKK: 42.317,
      TRL: 546131,
      USD: 1.009,
      ZAR: 6.2013
    }
  }

  baseCurrency = 'EUR'
  TIMEOUT = 200
  ENDPOINT = `http://api.fixer.io/latest?base=${this.baseCurrency}`

  constructor(private _http: Http) {}

  init(mode: Mode): void {
    this._mode = mode;
  }

  getStore() {
    if (this._mode === Mode.STATIC) {
      return Observable.of(this.staticStore);
    } else if (this._mode === Mode.API) {
      return this._http.get(this.ENDPOINT)
        .map(res => res.json())
      ;
    }
  }

  getRate(currency: string, store: IExchangeStore): number {
    return Object.assign({EUR: 1}, store.rates)[currency];
  }

  getCurrencyList(): Observable<String[]> {
    return this.getStore()
      .map(store => [this.baseCurrency].concat(Object.keys(store.rates)));
  }

  convert(value: number, base: string, to: string): Observable<number> {
    return this.getStore()
      .map(store => {
        let baseRate = this.getRate(base, store);
        let toRate = this.getRate(to, store);
        return parseFloat((value * toRate / baseRate).toFixed(2));
      })
    ;
  }

}
