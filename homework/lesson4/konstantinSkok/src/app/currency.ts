import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

export type CurrencyType = {USD: number, EUR: number}

@Injectable()
export class Currency {
  public staticCurrencyRate: CurrencyType = {USD: 63.7180, EUR: 70.7020};

  constructor(private _http: Http) {}

  public  getCurrencyRate(): Observable<CurrencyType> {
    return this._http
      .get(`https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=
        +"USDRUB,EURRUB"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`)
      .map((response) => response.json())
      .map((json) => { return {USD: json.query.results.rate['0'].Rate, EUR: json.query.results.rate[1].Rate}; } );
  }
}
