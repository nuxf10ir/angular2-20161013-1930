import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable, Subject} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class CurrencyService {

  base = 'EUR';

  public fakeCoeffs = {
    'USD': 0.9,
    'EUR': 1,
    'RUB': 1/69,
    'GBP': 1.2
  };

  public koeffs = null;

  public s: Subject<any> = new Subject();

  constructor(private http: Http) {}

  // 100 EUR => RUR   100 * EURK/USDK * USDK/RURK
  getFake(value, typeFrom, typeTo){
    return Math.round(value * this.fakeCoeffs[typeFrom]/this.fakeCoeffs[this.base] * this.fakeCoeffs[this.base]/this.fakeCoeffs[typeTo] * 100)/100;
  }

  getNormal(value, typeFrom, typeTo){
    if(!this.koeffs){
      this.getCoeffs().subscribe((koeffs)=>{
        this.koeffs = koeffs;
        this.koeffs[this.base] = 1;
        let currency = Math.round(value * 1/this.koeffs[typeFrom] * this.koeffs[typeTo] * 100)/100;
        this.s.next(currency);
      });
    }else{
      let currency = Math.round(value * this.koeffs[this.base]/this.koeffs[typeFrom] * this.koeffs[typeTo]/this.koeffs[this.base] * 100)/100;
      this.s.next(currency);
    }
  }

  getCoeffs(): Observable<any[]> {
    return this.http.get("http://api.fixer.io/latest").map(result => result.json().rates);
  }

}
