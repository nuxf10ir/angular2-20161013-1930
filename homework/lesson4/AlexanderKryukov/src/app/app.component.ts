import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ExchangeService} from './exchange.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ExchangeService]
})
export class AppComponent implements OnInit {
baseCurrency:string = 'GBP';
targetCurrency:string = 'GBP';
baseAmount:number = 1;
targetAmount:number;
exchange;
suportedCurrencies:Array<string>;
	constructor(private exchangeService:ExchangeService){

        this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency)
		//.then(exchange=>console.log(+exchange));
		.then(exchange=>{this.exchange = +exchange; this.targetAmount= this.exchange*this.baseAmount; });

		this.exchangeService.getSuportedCurrencies()
		//.then(suported=>console.log(suported));
		.then(suported=>{this.suportedCurrencies = suported[0];});


	}
	myUpdate(val){console.log(val.options[1].selected)}
	 //get baseAmount(){console.log(this.baseAmount)}
	

     reloadAmount(newBaseAmount){
		 this.baseAmount = newBaseAmount;
       return this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency)
		//.then(exchange=>console.log(+exchange));
		.then(exchange=>{this.exchange = +exchange; this.targetAmount= this.exchange*(+newBaseAmount); });	 
	 }
     reloadBase(newbaseCurrency){
		 this.baseCurrency= newbaseCurrency;
       return this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency)
		//.then(exchange=>console.log(+exchange));
		.then(exchange=>{this.exchange = +exchange; this.targetAmount= this.exchange*(+this.baseAmount); });	 
	 }
     reloadTarget(newtargetCurrency){
		 this.targetCurrency= newtargetCurrency;
       return this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency)
		//.then(exchange=>console.log(+exchange));
		.then(exchange=>{this.exchange = +exchange; this.targetAmount= this.exchange*(+this.baseAmount); });	 
	 }

	 //onChangeHandlerBase(selected){this.baseCurrency = selected}
	 onChangeHandlerTarget(selected){this.targetCurrency = selected}

	  ngOnInit() {
  }
}




