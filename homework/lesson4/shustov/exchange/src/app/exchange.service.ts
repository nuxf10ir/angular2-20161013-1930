import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ExchangeService {

  constructor(private _http: Http) {
    this.getRatesFor = this.getRatesFor.bind(this);
  }

  public getRatesFor(symbol): Observable<any[]> {
    return this._http
      .get(`http://api.fixer.io/latest?symbols=${symbol}`)
      .map(result => result.json())
      .map(res => res.rates[symbol])
  }

}
