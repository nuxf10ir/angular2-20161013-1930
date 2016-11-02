"use strict";
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./autocomplite.css');
var Observable_1 = require('@reactivex/rxjs/src/Observable');
require('../node_modules/@reactivex/rxjs/src/add/observable/fromEvent');
require('../node_modules/@reactivex/rxjs/src/add/observable/fromPromise');
require('../node_modules/@reactivex/rxjs/src/add/operator/map');
require('../node_modules/@reactivex/rxjs/src/add/operator/pluck');
require('../node_modules/@reactivex/rxjs/src/add/operator/filter');
require('../node_modules/@reactivex/rxjs/src/add/operator/debounceTime');
var Autocomplite = (function () {
    function Autocomplite(_element) {
        var _this = this;
        this._element = _element;
        this._element.innerHTML = require('./template.html');
        this._input = this._element.querySelector("[data-element='input-field']");
        this._result = this._element.querySelector('[data-element="result"]');
        Observable_1.Observable.fromEvent(this._input, 'input')
            .filter(function (event) {
            var target = event.target;
            return target.value.trim().length >= 3;
        })
            .debounceTime(500)
            .pluck('target', 'value')
            .subscribe(function (value) {
            Observable_1.Observable.fromPromise(_this._request(value)).subscribe(function (response) {
                if (response.status === 200) {
                    Observable_1.Observable.fromPromise(response.json())
                        .map(function (response) { return response.terms.slice(0, 5); })
                        .subscribe(function (value) { return _this._showResult(value); });
                }
                else {
                    _this._clearResult();
                }
            });
        });
        Observable_1.Observable.fromEvent(this._result, 'click')
            .filter(function (event) {
            var target = event.target;
            return target.dataset['element'] === 'resultItem';
        })
            .pluck('target', 'textContent')
            .subscribe(function (value) {
            _this._input.value = value;
            _this._clearResult();
        });
    }
    ;
    Autocomplite.prototype._request = function (value) {
        return fetch("https://wikisynonyms.p.mashape.com/" + value, {
            method: 'GET',
            headers: {
                "X-Mashape-Key": "qqCSw1zFpDmshGgm5q8PhzpUsiWsp1fWm93jsn1Q3btcVaR2hZ",
                "Accept": "application/json"
            }
        });
    };
    Autocomplite.prototype._clearResult = function () {
        this._result.innerHTML = '';
    };
    Autocomplite.prototype._showResult = function (terms) {
        var result = '';
        for (var _i = 0, terms_1 = terms; _i < terms_1.length; _i++) {
            var term = terms_1[_i];
            result += "<li class='list-group-item' data-element=\"resultItem\">" + term.term + "</li>";
        }
        this._result.innerHTML = result;
    };
    return Autocomplite;
}());
var component = new Autocomplite(document.querySelector("[data-component='autocomplite']"));
