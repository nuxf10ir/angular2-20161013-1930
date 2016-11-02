"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.hotels = [
            {
                title: 'Довиль Отель & SPA 5*',
                description: 'Почувствуйте себя знаменитостью благодаря великолепному сервису в Довиль Hotel&SPA All Inclusive',
                country: 'Россия',
                stars: 5,
                ratings: {
                    main: 8.5,
                    purity: 9.1,
                    comfort: 8.9,
                    location: 8.3,
                    facilities: 8.5,
                    personal: 8.7
                },
                reviews: 253,
                photo: [
                    'http://s-ec.bstatic.com/images/hotel/840x460/513/51335368.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/513/51335484.jpg',
                    'http://t-ec.bstatic.com/images/hotel/840x460/513/51335524.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/513/51335620.jpg'
                ],
                services: ['Бесплатный Wi-Fi', 'Парковка', 'Семейные номера', 'Спа и оздоровительный центр', 'Кондиционер',
                    'Трансфер от/до аэропорта']
            },
            {
                title: 'Dolphin Resort Hotel & Conference',
                description: 'Отель Dolphin Resort Hotel & Conference расположен в центре города Сочи, на берегу Черного моря.',
                country: 'Россия',
                stars: 5,
                ratings: {
                    main: 8.4,
                    purity: 8.5,
                    comfort: 8.6,
                    location: 9.3,
                    facilities: 7.8,
                    personal: 8.3
                },
                reviews: 700,
                photo: [
                    'http://s-ec.bstatic.com/images/hotel/840x460/274/27405012.jpg',
                    'http://t-ec.bstatic.com/images/hotel/840x460/468/46874770.jpg',
                    'http://t-ec.bstatic.com/images/hotel/840x460/468/46874284.jpg',
                    'http://t-ec.bstatic.com/images/hotel/840x460/410/41000341.jpg'
                ],
                services: ['Открытый плавательный бассейн', 'Бесплатный Wi-Fi', 'Семейные номера', 'Бесплатная парковка',
                    'Допускается размещение домашних животных']
            },
            {
                title: 'GrandResort',
                description: 'Пятизвездочный курортный отель GrandResort находится на собственном пляже в Аматусе, около Лимассола.',
                country: 'Кипр',
                stars: 5,
                ratings: {
                    main: 8.3,
                    purity: 8.4,
                    comfort: 8.4,
                    location: 8.3,
                    facilities: 8.3,
                    personal: 8.5
                },
                reviews: 676,
                photo: [
                    'http://t-ec.bstatic.com/images/hotel/840x460/481/48158088.jpg',
                    'http://t-ec.bstatic.com/images/hotel/840x460/158/15888961.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/214/21477831.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/181/18112551.jpg'
                ],
                services: ['Бесплатный Wi-Fi', 'Спа и оздоровительный центр', 'Бесплатная парковка',
                    'Семейные номера', 'Трансфер от/до аэропорта', 'Фитнес-центр']
            },
            {
                title: 'Sun Hall Hotel',
                description: 'Отель Sun Hall с видом на набережную Финикудес расположен всего в 50 метрах от пляжа.',
                country: 'Кипр',
                stars: 4,
                ratings: {
                    main: 7.8,
                    purity: 7.6,
                    comfort: 7.8,
                    location: 8.9,
                    facilities: 7.2,
                    personal: 7.7
                },
                reviews: 401,
                photo: [
                    'http://t-ec.bstatic.com/images/hotel/840x460/651/65144285.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/430/43049268.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/651/65144763.jpg',
                    'http://t-ec.bstatic.com/images/hotel/840x460/651/65144284.jpg'
                ],
                services: ['Бесплатный Wi-Fi', 'Семейные номера', 'Парковка',
                    'Фитнес-центр', 'Кондиционер', 'Номера для некурящих']
            },
            {
                title: 'Samui Resotel Beach Resort',
                description: "\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u044B\u0439 \u0441\u043F\u0430-\u043E\u0442\u0435\u043B\u044C Samui Resotel \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u0431\u0435\u043B\u044B\u0445 \u043F\u0435\u0441\u043A\u0430\u0445 \u043F\u043B\u044F\u0436\u0430 \u0427\u0430\u0432\u0435\u043D\u0433 \n      \u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442 \u043F\u0440\u0435\u043B\u0435\u0441\u0442\u043D\u044B\u043C\u0438 \u043D\u043E\u043C\u0435\u0440\u0430\u043C\u0438 \u0441 \u0432\u0438\u0434\u043E\u043C \u043D\u0430 \u043E\u043A\u0435\u0430\u043D \u0438\u043B\u0438 \u0442\u0440\u043E\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0430\u0434",
                country: 'Тайланд',
                stars: 4,
                ratings: {
                    main: 8.3,
                    purity: 8.2,
                    comfort: 8.5,
                    location: 8.2,
                    facilities: 8.4,
                    personal: 8.8
                },
                reviews: 499,
                photo: [
                    'http://s-ec.bstatic.com/images/hotel/840x460/153/15345342.jpg',
                    'http://t-ec.bstatic.com/images/hotel/840x460/138/13873499.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/138/13873591.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/138/13871393.jpg'
                ],
                services: ['Открытый плавательный бассейн', 'Бесплатный Wi-Fi',
                    'Фитнес-центр', 'Трансфер от/до аэропорта', 'Кондиционер']
            },
            {
                title: 'Maehaad Bay Resort',
                description: "\u041A\u0443\u0440\u043E\u0440\u0442\u043D\u044B\u0439 \u043E\u0442\u0435\u043B\u044C Maehaad Bay \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u043D\u0430 \u043F\u0435\u0441\u0447\u0430\u043D\u043E\u043C \u043F\u043B\u044F\u0436\u0435 \u041C\u0430\u0435 \u0425\u0430\u0430\u0434.",
                country: 'Тайланд',
                stars: 5,
                ratings: {
                    main: 8.5,
                    purity: 8.7,
                    comfort: 8.9,
                    location: 8.2,
                    facilities: 8.6,
                    personal: 8.3
                },
                reviews: 455,
                photo: [
                    'http://t-ec.bstatic.com/images/hotel/840x460/579/57993192.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/285/28590817.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/580/58088078.jpg',
                    'http://s-ec.bstatic.com/images/hotel/840x460/101/10138230.jpg'
                ],
                services: ['Открытый плавательный бассейн', 'Бесплатный Wi-Fi']
            }
        ];
    }
    AppComponent.prototype.onHotelSelect = function (hotel) {
        this.selectedHotel = hotel;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map