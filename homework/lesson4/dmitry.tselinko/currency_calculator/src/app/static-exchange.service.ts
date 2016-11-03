import { Injectable } from '@angular/core';
import { IServiceExchange } from './service-exchange';

@Injectable()
export class StaticExchangeService implements IServiceExchange {
  baseCurrency = 'EUR'
  _store = {
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

  getRate(currency: string): number {
    return this._store.rates[currency];
  }

  getCurrencyList() {
    let result = [this.baseCurrency].concat(Object.keys(this._store.rates));
    return Promise.resolve(result);
  }

  convert(value: number, base: string, to: string) {
    return Promise.resolve(
      parseFloat((value * this.getRate(base) / this.getRate(to)).toFixed(2))
    );
  }

}
