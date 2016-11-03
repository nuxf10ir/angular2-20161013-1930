import { Component } from '@angular/core';
import { RealConverterService } from './real-converter.service';

@Component({
  selector: 'real-converter',
  templateUrl: 'real-converter.component.html'
})

export class RealConverterComponent {
  public rates: any;
  public currencyName: string;
  public currencyCount: number;
  public sum: any;

  constructor(
    private realConverterService: RealConverterService
  ) {

    realConverterService.getRates().subscribe((data: any) => {
      data = data.json();

      if (data && data.query && data.query.results && data.query.results.rate) {
        this.rates = data.query.results.rate;
      }
    })
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
    let rate = this.rates.filter((rate: any) => rate.id === this.currencyName);

    this.sum = this.currencyCount && rate[0] ? this.currencyCount * parseInt(rate[0]['Rate'], 10) : '';
  }
}
