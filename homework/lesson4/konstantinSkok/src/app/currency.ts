import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';


export type CurrencyType = {currency: string, rate: number}

@Injectable()
export class Currency {

  public staticCurrencyRate: CurrencyType[] = [
    {
      currency: 'USD',
      rate: 63.59
    },
    {
      currency: 'EUR',
      rate: 70.66
    }
  ];

  constructor(private _http: Http) {}

  public  getCurrencyRate(): Observable<CurrencyType[]> {
    return this._http
      .get(`https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=
        +"USDRUB,EURRUB"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`)
      .map((response) => {
        let json = response.json();
        return [
          {
            currency: 'USD',
            rate: <number>json.query.results.rate[0].Rate
          },
          {
            currency: 'EUR',
            rate: <number>json.query.results.rate[1].Rate
          }
        ];

      });
  }
}
