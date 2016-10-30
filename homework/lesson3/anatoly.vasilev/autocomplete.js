var Autocomplete = (function () {
    function Autocomplete(selector) {
        var _this = this;
        if (selector === void 0) { selector = '.autocomplete'; }
        this.selector = selector;
        var autoElements = Array.from(document.querySelectorAll("input" + this.selector));
        autoElements.forEach(function (inputElement) {
            var ul = document.createElement('ul');
            ul.classList.add('itemsList');
            inputElement.parentNode.insertBefore(ul, inputElement.nextSibling);
            var pressStream = Rx.Observable.fromEvent(inputElement, 'input');
            pressStream.debounce(500).subscribe(function () {
                _this.search(inputElement, inputElement.dataset["url"]).then(function (items) {
                    _this.createList(items, inputElement);
                });
            });
        });
    }
    Autocomplete.prototype.search = function (inputElement, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.onload = function () {
                var items = JSON.parse(xhr.responseText).filter(function (item) {
                    return item.name.indexOf(inputElement.value) > -1;
                });
                resolve(items);
            };
            xhr.onerror = function (error) {
                reject(error);
            };
            xhr.send();
        });
    };
    Autocomplete.prototype.createList = function (users, inputElement) {
        var _this = this;
        var userList = inputElement.nextElementSibling;
        if (users.length > 0) {
            userList.innerHTML = '';
            users.forEach(function (user) {
                var li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
                _this.addClickListener(li);
            });
            userList.style.display = 'block';
        }
        else {
            userList.style.display = 'none';
        }
    };
    Autocomplete.prototype.addClickListener = function (li) {
        var inputElement = li.parentElement.previousElementSibling;
        var clickStream = Rx.Observable.fromEvent(li, 'click');
        clickStream.subscribe(function (event) {
            var target = event.target;
            inputElement.value = target.textContent;
            li.parentElement.style.display = 'none';
        });
    };
    return Autocomplete;
}());
new Autocomplete();
//# sourceMappingURL=autocomplete.js.map