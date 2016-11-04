import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService, Mode } from '../exchange.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

interface IModel {
  baseCurrency: string;
  targetCurrency: string;
  value: number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  providers: [ExchangeService]
})
export class CalculatorComponent implements OnInit {
  @Input() serviceMode: Mode
  convertedValue: Observable<number>
  model: IModel
  currencyList: String[]

  constructor(private _exchangeService: ExchangeService) { }

  ngOnInit() {
    let { baseCurrency } = this._exchangeService;
    this._exchangeService.init(this.serviceMode);
    this.model = {
      baseCurrency,
      targetCurrency: baseCurrency,
      value: 0
    };
    this._exchangeService.getCurrencyList().subscribe(
      data => { this.currencyList = data }
    );
  }

  onConvert() {
    let { value, baseCurrency, targetCurrency } = this.model;
    if (value && baseCurrency && targetCurrency) {
      this.convertedValue = this._exchangeService.convert(value, baseCurrency, targetCurrency);
    } else {
      this.convertedValue = Observable.of(0);
    }
  }

}
