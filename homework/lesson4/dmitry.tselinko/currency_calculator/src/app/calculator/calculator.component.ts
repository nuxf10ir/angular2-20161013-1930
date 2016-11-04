import { Component, OnInit, Input } from '@angular/core';
import { ExchangeService, Mode } from '../exchange.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  providers: [ExchangeService]
})
export class CalculatorComponent implements OnInit {
  @Input() serviceMode: Mode
  convertedValue: Observable<number>

  constructor(private _exchangeService: ExchangeService) { }

  ngOnInit() {
    this._exchangeService.init(this.serviceMode);
  }

  getCurrencyList() {
    return this._exchangeService.getCurrencyList();
  }

  onConvert(f: NgForm) {
    let { value, baseCurrency, targetCurrency } = f.value.model;
    if (this._exchangeService.isReady && value && baseCurrency && targetCurrency) {
      this.convertedValue = this._exchangeService.convert(value, baseCurrency, targetCurrency);
    }
  }

}
