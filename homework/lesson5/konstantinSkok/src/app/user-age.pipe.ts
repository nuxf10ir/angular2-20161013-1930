import { Pipe, PipeTransform } from '@angular/core';
import {UserInterface} from "../shared/interfaces/User";

@Pipe({
  name: 'userAge',
  pure: false
})
export class UserAgePipe implements PipeTransform {

  transform(value: UserInterface[], age: number): any {
    if (value) {
      return value.filter((item) => {
        return item.age >= age;
      });
    }
    return null;
  }

}
