import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ExchangeService {

  constructor(private _http: Http) {
    //TODO: mutation in constructor
    //this.getRatesFor = this.getRatesFor.bind(this);
  }

  //TODO: specify types
  public getRatesFor(symbol): Observable<any[]> {
    return this._http
      .get(`http://api.fixer.io/latest?symbols=${symbol}`)
      //TODO: 2 maps
      .map(result => result.json())
      .map(res => res.rates[symbol])
  }

}
