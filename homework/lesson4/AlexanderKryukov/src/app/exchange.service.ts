import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class ExchangeService {
	public baseCurrency = 'EUR';
	public targetCurrency = 'GBR';

	private baseURL = 'https://angulare-2.firebaseio.com/CurrenciesRate/';

 		constructor (private http:Http){
	
	}

  	getExchangeRate(baseCurrency:string, targetCurrency:string):any{
	return this.http.get(`${this.baseURL}${baseCurrency}_${ targetCurrency}.json`)
		.toPromise()
		.then(response=>this.convertRate(response.json()));
    }
  	getSuportedCurrencies():any{
	return this.http.get(`${this.baseURL}SuportedCurrencies.json`)
		.toPromise()
		.then(response=>this.convertSuported(response.json()));
    }
	
		private convertRate(parsedResponse){
		return Object.keys(parsedResponse)

		.map(
						id=>( parsedResponse[id].rate)
		

/*			id=>({
			//id: id,
			rate: parsedResponse[id].rate
		})
*/		
	);
	}
		private convertSuported(parsedResponse){
		return Object.keys(parsedResponse)

		.map(
		   id=>( Object.keys(parsedResponse[id]).map((k)=>parsedResponse[id][k]))
						//id=>(Object.values(parsedResponse[id]))
		

	);

	}

	

}
