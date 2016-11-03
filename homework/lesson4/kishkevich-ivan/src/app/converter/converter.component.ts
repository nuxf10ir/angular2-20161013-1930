import {Component, Input } from '@angular/core';
import { ConverterService } from './converter.service';

@Component({
  selector: 'converter',
  templateUrl: 'converter.component.html'
})

export class ConverterComponent {
  @Input() public mode: string;
  public rates: any;
  public currencyName: string;
  public currencyCount: number;
  public sum: any;
  public typeName: string;

  constructor(private converterService: ConverterService) {}

  ngOnInit() {
    if (this.mode === 'real') {
      this.typeName = 'Real';

      this.converterService.getRates().subscribe((data: any) => {
        data = data.json();

        if (data && data.query && data.query.results && data.query.results.rate) {
          this.rates = data.query.results.rate;
        }
      })
    } else {
      this.typeName = 'Dream';

      this.rates = [
        {id: 'USDRUB', Name: 'USD/RUB', Rate: '30'},
        {id: 'USDEUR', Name: 'EUR/RUB', Rate: '40'},
      ];
    }
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
