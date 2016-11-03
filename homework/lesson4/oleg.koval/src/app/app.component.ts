import { Component } from '@angular/core';
import { RatesService } from './rates.service';
import { Observable } from 'rxjs-es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RatesService]
})
export class AppComponent {
    title = 'Homework #4: Currency converter';
    public currencyList: string[] = [];
    public resultAmount: string = '0.00';
    private inputElement: HTMLInputElement;

    constructor(public _rates: RatesService) {
        this.currencyList = _rates.getCurrencies();
        this._rates.exchangeResult.subscribe(item => {this.resultAmount = item.value;});
    }

    public subscribeInput(inputElem: HTMLInputElement) {
        this.inputElement = inputElem;
        Observable.fromEvent(this.inputElement, 'input')
        .debounceTime(500)
        .subscribe(() => this.changeAmount());
    }

    public changeAmount(): void {
        this._rates.currentAmount = parseFloat(this.inputElement.value);
        this._rates.refresh();
    }

    public changeCur(currencyElem): void {
        this._rates.currentCur = currencyElem.value;
        this._rates.refresh();
    }
}
