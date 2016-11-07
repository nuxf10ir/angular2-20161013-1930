import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: any, name: string): any {
    if (value) {
      return value.filter((item) => {
        let userName = item.name.toLowerCase();
        return userName.includes(name.toLowerCase());
      });
    }
    return null;
  }

}
