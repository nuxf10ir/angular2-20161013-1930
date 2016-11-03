import { Component } from '@angular/core';
import {Observable} from 'rxjs-es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private serviceUrl: string = 'http://api.fixer.io/latest?base=';
    private input: HTMLInputElement;
    items: string[] = [];
    error: string;
    title:string = 'Homework #3: Currency quote lookup (type: usd, aud, cad, ...)';

    onClick(elem: HTMLInputElement) {
        this.input = elem;
        Observable.fromEvent(this.input, 'input')
        .debounceTime(500)
        .subscribe(() => this.getRates());
    }

    private getRates():void {
        this.items = [];
        this.error = '';

        //do not send any request for empty query string
        if (this.input.value.length === 0)
            return;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.serviceUrl + this.input.value, true);
        xhr.onload = ()=> {
            this.parseResult(xhr.responseText);
        };
        xhr.onerror = (error)=>{
            this.error = error.message;
        };
        xhr.send();
    }

    private parseResult(responseText: string) {
        let result = JSON.parse(responseText);

        if (result.error) {
            this.error = result.error;
            return;
        }
        
        if (result.rates) {
            for (let rate in result.rates) {
                this.items.push(rate +' rate is '+ result.rates[rate]);
            }
        }
    }
}
