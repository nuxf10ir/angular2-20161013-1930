import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConverterService {

  constructor(private http: Http) {}

  public getRates() {
    return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`);
  }
}
