"use strict";
require("whatwg-fetch");
var Rx_1 = require("rxjs/Rx");
var TIMEOUT = 200;
var API_URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=40&orderBy=relevance&q=title:';
var Autocomplete = (function () {
    function Autocomplete(_input, _container) {
        this._input = _input;
        this._container = _container;
        this.handleFetching();
        this.handleItemSelect();
    }
    Autocomplete.prototype.setAutocompleteVisibility = function (flag) {
        this._container.style.display = flag ? 'block' : 'none';
    };
    Autocomplete.prototype.handleFetching = function () {
        var _this = this;
        Rx_1.Observable.fromEvent(this._input, 'keyup')
            .pluck('target', 'value')
            .debounceTime(TIMEOUT)
            .distinctUntilChanged()
            .flatMap(function (query) { return fetch(API_URL + query); })
            .flatMap(function (response) { return response.json(); })
            .forEach(function (data) {
            var html = (data.items || []).map(_this.generateItem.bind(_this)).join('');
            _this._container.innerHTML = html;
            _this.setAutocompleteVisibility(true);
        });
    };
    Autocomplete.prototype.handleItemSelect = function () {
        var _this = this;
        Rx_1.Observable.fromEvent(this._container, 'click')
            .pluck('target', 'innerHTML')
            .forEach(function (v) {
            _this._input.value = v;
            _this.setAutocompleteVisibility();
        });
    };
    Autocomplete.prototype.generateItem = function (data) {
        return "<div class=\"item\">" + data.volumeInfo.title + "</div>";
    };
    return Autocomplete;
}());
window.onload = function () {
    var inputNode = document.getElementById('input');
    var containerNode = document.getElementById('autocomplete');
    var autocomplete = new Autocomplete(inputNode, containerNode);
};
