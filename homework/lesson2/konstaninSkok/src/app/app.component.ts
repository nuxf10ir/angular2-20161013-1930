import { Component } from '@angular/core';

export type Hotel = {
  title: string,
  description: string,
  country: string,
  stars: number,
  ratings: {
    main: number,
    purity: number,
    comfort: number,
    location: number,
    facilities: number,
    personal: number
  },
  reviews: number,
  photo: string[],
  services: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels: Hotel[] = [
    {
      title : 'Довиль Отель & SPA 5*',
      description: 'Почувствуйте себя знаменитостью благодаря великолепному сервису в Довиль Hotel&SPA All Inclusive',
      country : 'Россия',
      stars: 5,
      ratings : {
        main: 8.5,
        purity: 9.1,
        comfort: 8.9,
        location : 8.3,
        facilities :  8.5,
        personal : 8.7
      },
      reviews : 253,
      photo : [
        'http://s-ec.bstatic.com/images/hotel/840x460/513/51335368.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/513/51335484.jpg',
        'http://t-ec.bstatic.com/images/hotel/840x460/513/51335524.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/513/51335620.jpg'
      ],
      services : ['Бесплатный Wi-Fi', 'Парковка', 'Семейные номера', 'Спа и оздоровительный центр', 'Кондиционер',
        'Трансфер от/до аэропорта']
    },
    {
      title : 'Dolphin Resort Hotel & Conference',
      description: 'Отель Dolphin Resort Hotel & Conference расположен в центре города Сочи, на берегу Черного моря.',
      country : 'Россия',
      stars: 4,
      ratings : {
        main: 8.4,
        purity: 8.5,
        comfort: 8.6,
        location : 9.3,
        facilities :  7.8,
        personal : 8.3
      },
      reviews : 700,
      photo : [
        'http://s-ec.bstatic.com/images/hotel/840x460/274/27405012.jpg',
        'http://t-ec.bstatic.com/images/hotel/840x460/468/46874770.jpg',
        'http://t-ec.bstatic.com/images/hotel/840x460/468/46874284.jpg',
        'http://t-ec.bstatic.com/images/hotel/840x460/410/41000341.jpg'
      ],
      services : ['Открытый плавательный бассейн', 'Бесплатный Wi-Fi', 'Семейные номера', 'Бесплатная парковка',
        'Допускается размещение домашних животных']
    },
    {
      title : 'GrandResort',
      description: 'Пятизвездочный курортный отель GrandResort находится на собственном пляже в Аматусе, около Лимассола.',
      country : 'Кипр',
      stars: 3,
      ratings : {
        main: 8.3,
        purity: 8.4,
        comfort: 8.4,
        location : 8.3,
        facilities :  8.3,
        personal : 8.5
      },
      reviews : 676,
      photo : [
        'http://t-ec.bstatic.com/images/hotel/840x460/481/48158088.jpg',
        'http://t-ec.bstatic.com/images/hotel/840x460/158/15888961.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/214/21477831.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/181/18112551.jpg'
      ],
      services : ['Бесплатный Wi-Fi', 'Спа и оздоровительный центр', 'Бесплатная парковка',
        'Семейные номера', 'Трансфер от/до аэропорта', 'Фитнес-центр']
    },
    {
      title : 'Sun Hall Hotel',
      description: 'Отель Sun Hall с видом на набережную Финикудес расположен всего в 50 метрах от пляжа.',
      country : 'Кипр',
      stars: 4,
      ratings : {
        main: 7.8,
        purity: 7.6,
        comfort: 7.8,
        location : 8.9,
        facilities :  7.2,
        personal : 7.7
      },
      reviews : 401,
      photo : [
        'http://t-ec.bstatic.com/images/hotel/840x460/651/65144285.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/430/43049268.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/651/65144763.jpg',
        'http://t-ec.bstatic.com/images/hotel/840x460/651/65144284.jpg'
      ],
      services : ['Бесплатный Wi-Fi', 'Семейные номера', 'Парковка',
        'Фитнес-центр', 'Кондиционер', 'Номера для некурящих']
    },
    {
      title : 'Samui Resotel Beach Resort',
      description: `Великолепный спа-отель Samui Resotel находится на белых песках пляжа Чавенг 
      и располагает прелестными номерами с видом на океан или тропический сад`,
      country : 'Тайланд',
      stars: 5,
      ratings : {
        main: 8.3,
        purity: 8.2,
        comfort: 8.5,
        location : 8.2,
        facilities :  8.4,
        personal : 8.8
      },
      reviews : 499,
      photo : [
        'http://s-ec.bstatic.com/images/hotel/840x460/153/15345342.jpg',
        'http://t-ec.bstatic.com/images/hotel/840x460/138/13873499.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/138/13873591.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/138/13871393.jpg'
      ],
      services : ['Открытый плавательный бассейн', 'Бесплатный Wi-Fi',
        'Фитнес-центр', 'Трансфер от/до аэропорта', 'Кондиционер']
    },
    {
      title : 'Maehaad Bay Resort',
      description: `Курортный отель Maehaad Bay расположен на песчаном пляже Мае Хаад.`,
      country : 'Тайланд',
      stars: 3,
      ratings : {
        main: 8.5,
        purity: 8.7,
        comfort: 8.9,
        location : 8.2,
        facilities :  8.6,
        personal : 8.3
      },
      reviews : 455,
      photo : [
        'http://t-ec.bstatic.com/images/hotel/840x460/579/57993192.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/285/28590817.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/580/58088078.jpg',
        'http://s-ec.bstatic.com/images/hotel/840x460/101/10138230.jpg'
      ],
      services : ['Открытый плавательный бассейн', 'Бесплатный Wi-Fi']
    }
  ];

  public selectedHotel: Hotel = this.hotels[0];
  public currentCountry: string = this.selectedHotel.country;

  public onHotelSelect(hotel) {
    this.selectedHotel = hotel;
  }

}




