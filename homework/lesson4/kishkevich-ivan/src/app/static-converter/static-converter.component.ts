import { Component } from '@angular/core';

@Component({
  selector: 'static-converter',
  templateUrl: 'static-converter.component.html'
})

export class StaticConverterComponent {
  public rates: any;
  public sum: any;
  public currencyName: string;
  public currencyCount: number;

  constructor() {
    this.rates = {
      'usd': 63,
      'eur': 70
    };
  }

  public onChangeCount(event) {
    this.currencyCount = parseInt(event.target.value, 10);
    this.calculateSum();
  }

  public onChangeCurrency(event) {
    this.currencyName = event.target.value;
    this.calculateSum();
  }

  private calculateSum() {
    this.sum = this.currencyCount && this.rates[this.currencyName] ? this.currencyCount * this.rates[this.currencyName] : '';
  }
}
