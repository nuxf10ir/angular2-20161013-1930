import 'whatwg-fetch';
import { Observable } from 'rxjs/Rx';

const TIMEOUT = 200;
const API_URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=40&orderBy=relevance&q=title:';

interface Item {
  accessInfo: Object,
  etag: string,
  id: string,
  kind: string,
  saleInfo: Object,
  selfLink: string
}

interface ApiData {
  items: Array<Item>
  kind: string,
  totalItems: number
}

class Autocomplete {
  constructor(private _input: HTMLInputElement, private _container: HTMLElement) {
    this.handleFetching();
    this.handleItemSelect();
  }

  setAutocompleteVisibility(flag?: Boolean): void {
    this._container.style.display = flag ? 'block' : 'none';
  }

  handleFetching(): void {
    Observable.fromEvent(this._input, 'keyup')
    .pluck('target', 'value')
    .debounceTime(TIMEOUT)
    .distinctUntilChanged()
    .flatMap(query => fetch(API_URL + query))
    .flatMap(response => response.json())
    .forEach((data: ApiData) => {
      var html = (data.items || []).map(this.generateItem.bind(this)).join('');
      this._container.innerHTML = html;
      this.setAutocompleteVisibility(true);
    });
  }

  handleItemSelect(): void {
    Observable.fromEvent(this._container, 'click')
    .pluck('target', 'innerHTML')
    .forEach(v => {
      this._input.value = <string> v;
      this.setAutocompleteVisibility();
    });
  }

  generateItem(data): string {
    return `<div class="item">${data.volumeInfo.title}</div>`;
  }
}

window.onload = () => {
  let inputNode = <HTMLInputElement>document.getElementById('input');
  let containerNode = document.getElementById('autocomplete');
  let autocomplete = new Autocomplete(inputNode, containerNode);
};
