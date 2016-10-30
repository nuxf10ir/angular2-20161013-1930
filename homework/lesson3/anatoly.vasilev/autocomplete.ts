declare let Rx: any;


class Autocomplete {

    constructor(private selector: string = '.autocomplete') {

        let autoElements = Array.from(document.querySelectorAll(`input${this.selector}`));

        autoElements.forEach((inputElement: HTMLInputElement)=> {
            let ul = document.createElement('ul');
            ul.classList.add('itemsList');
            inputElement.parentNode.insertBefore(ul, inputElement.nextSibling);

            let pressStream = Rx.Observable.fromEvent(inputElement, 'input');
            pressStream.debounce(500).subscribe(()=> {
                let responseStream = Rx.Observable.fromPromise(this.search(inputElement, inputElement.dataset["url"]));
                responseStream.subscribe((items)=> {
                    this.createList(items, inputElement);
                });
            });

        });
    }

    search(inputElement, url) {
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = ()=> {
                var items = JSON.parse(xhr.responseText).filter(function (item) {
                    return item.name.indexOf(inputElement.value) > -1;
                });
                resolve(items);
            };
            xhr.onerror = (error)=>{
                reject(error);
            };
            xhr.send();
        });

    }

    createList(users, inputElement) {
        let userList = inputElement.nextElementSibling;
        if (users.length > 0) {
            userList.innerHTML = '';
            users.forEach((user)=>{
                var li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
                this.addClickListener(li);
            });
            userList.style.display = 'block';
        } else {
            userList.style.display = 'none';
        }
    }

    addClickListener(li) {
        let inputElement = li.parentElement.previousElementSibling;
        var clickStream = Rx.Observable.fromEvent(li, 'click');
        clickStream.subscribe((event: MouseEvent)=> {
            let target = <HTMLElement>event.target;
            inputElement.value = target.textContent;
            li.parentElement.style.display = 'none';
        });
    }

}
new Autocomplete();