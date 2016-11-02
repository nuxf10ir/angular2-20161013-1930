declare function require(name: string): any;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './autocomplite.css';

import {Observable} from '@reactivex/rxjs/src/Observable';
import {Observer} from '@reactivex/rxjs/src/Observer';

import '../node_modules/@reactivex/rxjs/src/add/observable/fromEvent';
import '../node_modules/@reactivex/rxjs/src/add/observable/fromPromise';

import '../node_modules/@reactivex/rxjs/src/add/operator/map';
import '../node_modules/@reactivex/rxjs/src/add/operator/pluck';
import '../node_modules/@reactivex/rxjs/src/add/operator/filter';
import '../node_modules/@reactivex/rxjs/src/add/operator/debounceTime'




class Autocomplite {
  private _input: HTMLInputElement;
  private _result: HTMLElement;

  constructor(private _element: HTMLElement) {
    this._element.innerHTML = require('./template.html');
    this._input = this._element.querySelector("[data-element='input-field']") as HTMLInputElement;
    this._result = this._element.querySelector('[data-element="result"]') as HTMLElement;

    Observable.fromEvent(this._input, 'input')
      .filter((event: Event) => {
        let target = event.target as HTMLInputElement;
        return target.value.trim().length >= 3;
      })
      .debounceTime(500)
      .pluck('target', 'value')
      .subscribe((value) => {
        Observable.fromPromise(this._request(value as string)).subscribe((response) => {
          if (response.status === 200) {
            Observable.fromPromise(response.json())
              .map((response) => response.terms.slice(0, 5))
              .subscribe((value) => this._showResult(value))
          } else {
            this._clearResult();
          }
        })
      });

    Observable.fromEvent(this._result, 'click')
      .filter((event: Event) => {
        let target = event.target as HTMLElement;
        return target.dataset['element'] === 'resultItem';
      })
      .pluck('target', 'textContent')
      .subscribe((value: string) => {
        this._input.value = value;
        this._clearResult();
      })
  };

  private _request(value: string): Promise<Response> {
    return fetch(`https://wikisynonyms.p.mashape.com/${value}`,
      {
        method: 'GET',
        headers: {
          "X-Mashape-Key": "qqCSw1zFpDmshGgm5q8PhzpUsiWsp1fWm93jsn1Q3btcVaR2hZ",
          "Accept": "application/json"
        }
      }
    );
  }

  private _clearResult() {
    this._result.innerHTML = '';
  }

  private _showResult(terms: any[]) {
    let result = '';
    for (let term of terms) {
      result += `<li class='list-group-item' data-element="resultItem">${term.term}</li>`
    }
    this._result.innerHTML = result;
  }
}


let component = new Autocomplite(document.querySelector("[data-component='autocomplite']") as HTMLElement);