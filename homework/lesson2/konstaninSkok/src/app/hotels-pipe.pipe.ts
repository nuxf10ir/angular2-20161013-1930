import { Pipe, PipeTransform } from '@angular/core';
import {Hotel} from './app.component';

@Pipe({
  name: 'hotelsPipe'
})
export class HotelsPipePipe implements PipeTransform {

  transform(value: any, country: string): any {
    if (country) {
      return value.filter((item: Hotel) => {
        return item.country === country;
      });
    }
    return value;
  }

}
