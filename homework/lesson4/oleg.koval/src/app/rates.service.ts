import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs-es/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RatesService {
    public currencies: string[] = [];
    public baseCur: string = 'USD';
    public currentCur: string = 'USD';
    public currentAmount: number = 0;
    public exchangeResult: EventEmitter<{}>;

    private baseUrl: string = 'http://api.fixer.io/latest?base=USD';

    private app;

    constructor(private _http: Http) {
        this._http.get(this.baseUrl).map(
            result => result.json()
        )
        .subscribe(data => {this.formatCurrencies(data)});
        this.exchangeResult = new EventEmitter();
    }

    public getCurrencies(): string[] {
        return this.currencies;
    }

    public refresh(): void {
        this._http.get(this.baseUrl + '&symbols=USD,' + this.currentCur).map(
            result => result.json()
        )
        .subscribe(data => {this.calculateExchangeResult(data)});
    }

    private calculateExchangeResult(data:any): void {
        let rate: number = 1;
        if (data.rates[this.currentCur])  {
            rate = data.rates[this.currentCur];
        }
        this.exchangeResult.emit({value: (this.currentAmount * rate).toString()});
    }

    private formatCurrencies(data:any):void {
        this.currencies.push('USD');
        for (let cur in data.rates) {
            this.currencies.push(cur);
        }
    }
}
