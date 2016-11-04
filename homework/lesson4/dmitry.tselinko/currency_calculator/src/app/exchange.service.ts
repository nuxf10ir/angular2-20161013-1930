import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

interface IExchangeStore {
  base: string;
  date: string;
  rates: Object;
}

interface IServiceExchange {
  _staticStore: IExchangeStore;
  _store: Observable<IExchangeStore>;
  baseCurrency: string;
  isReady: boolean;
  getCurrencyList(): Observable<String[]>;
  convert(value: number, from: string, to: string): Observable<number>;
}

export enum Mode {
  API,
  STATIC
}

@Injectable()
export class ExchangeService implements IServiceExchange {
  _store: Observable<IExchangeStore>;
  baseCurrency = 'EUR'
  isReady = false
  ENDPOINT = `http://api.fixer.io/latest?base=${this.baseCurrency}`
  _staticStore = {
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

  constructor(private _http: Http) {}

  init(mode: Mode): void {
    if (mode === Mode.STATIC) {
      this._store = Observable.of(this._staticStore);
      this.isReady = true;
    } else if (mode === Mode.API) {
      this._store = this._http.get(this.ENDPOINT).catch(this.handleError);
    }
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getRate(currency: string): Observable<number> {
    return this._store.map(store => store.rates[currency]);
  }

  getCurrencyList(): Observable<String[]> {
    return this._store.map(store => {
      return [this.baseCurrency].concat(Object.keys(store.rates));
    });
  }

  convert(value: number, base: string, to: string): Observable<number> {
    return Observable
      .merge(this.getRate(base), this.getRate(to))
      .map((baseRate, toRate) => parseFloat((value * baseRate / toRate).toFixed(2)))
    ;
  }

}
