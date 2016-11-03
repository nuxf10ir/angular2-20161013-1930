import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Hotel} from '../app.component';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotelsList.component.html',
  styleUrls: ['./hotelsList.component.css']
})
export class HotelsListComponent implements OnInit {
  @Input() hotels: Hotel[];
  @Input() selectedHotel: Hotel;
  @Input() currentCountry: string;

  @Output() hotelSelect = new EventEmitter();

  public menu: Set<string>;
  public mainImg: string

  constructor() {

  }

  ngOnInit() {
    // Создание меню из стран в списке отелей, с помощью Set они будут уникальны
    this.menu = new Set();
    for (let hotel of this.hotels){
      this.menu.add(hotel.country);
    }

    // Установка основного изображения
    this.mainImg = this.selectedHotel.photo[0];
  }

  public setMainImg(src: string) {
    this.mainImg = src;
  }

  public setCurrentCountry(country: string) {
    this.currentCountry = country;
  }

  public hotelSelectTrigger(hotel: Hotel, setMainImg: boolean = true) {
    this.hotelSelect.emit(hotel);

    if (setMainImg) {
      this.setMainImg(hotel.photo[0]);
    }

  }


}
