import { Component } from '@angular/core';
import {CurrencyService} from "./currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentValue = 100.0;
  currentValue2 = 0.0;
  currencies = [];
  values = [];
  currencyFrom = "";
  currencyTo = "";

  constructor(private currencyService: CurrencyService){

    for(let key in currencyService.fakeCoeffs){
      this.currencies.push(key);
      this.values.push(currencyService.fakeCoeffs[key]);
    }
    this.currencyFrom = this.currencies[0];
    this.currencyTo = this.currencies[2];

    this.currencyService.s.subscribe(value => {
      this.currentValue2 = value || 0;
    });

    this.currencyNormal();

  }

  fakeConvert(value){
    return this.currencyService.getFake(value, this.currencyFrom, this.currencyTo);
  }

  initNomalCurrency(){

  }

  currencyNormal($event?){
    setTimeout(()=>{
      this.currencyService.getNormal($event?parseInt($event.target.value):this.currentValue, this.currencyFrom, this.currencyTo);
    });
  }


}
