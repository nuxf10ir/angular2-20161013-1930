import { Component, OnInit, Input } from '@angular/core';
import { ServiceFactory, Modes } from '../service-factory';

interface Data {
  convertedValue: number;
  value: number;
  baseCurrency: string;
  targetCurrency: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @Input() serviceMode: Modes
  private _data: Data

  constructor(private _serviceFactory: ServiceFactory) {
    this._data = {
      convertedValue: 0,
      value: 0,
      baseCurrency: '',
      targetCurrency: ''
    };
  }

  ngOnInit() {
    console.log(this.exchangeService2);
  }

  onConvert() {
    let { value, baseCurrency, targetCurrency } = this._data;
    // this._data.convertedValue =
    // this.convertedValue = this.exchangeService.convert(
    //   value,
    //   baseCurrency,
    //   targetCurrency
    // );
  }

}
