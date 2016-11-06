import { Component} from '@angular/core';
import {Currency, CurrencyType} from '../currency';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';

enum ConvertationType {
  STATIC = 1,
  DINAMIC = 2
}

interface FormValues {
  convertationType: ConvertationType;
  currency: string;
  currencySum: number;
}

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  // styleUrls: ['./currency-converter.component.css'],
  providers : [Currency]
})
export class CurrencyConverterComponent {
  public staticCurrencyRate: CurrencyType[];
  public result: Observable<number>;

  constructor(private _currency: Currency) {
    this.staticCurrencyRate = _currency.staticCurrencyRate;
  }

  public convert(formValues: FormValues) {
    let convertationType = +formValues.convertationType;

    if (convertationType === ConvertationType.STATIC) {
      let rate = this.staticCurrencyRate[formValues.currency].rate;
      this.result = Observable.of(Math.round(formValues.currencySum * rate));
    } else if (convertationType === ConvertationType.DINAMIC) {
      this.result = this._currency.getCurrencyRate()
        .map(rates => {
          let rate = rates[formValues.currency].rate;
          return Math.round(formValues.currencySum * rate);
        });
    }
  }

}
