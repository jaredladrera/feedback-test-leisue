import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedbacks'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: any) => {
      let rVal = (val.queueNo.toLocaleLowerCase().includes(args)) || (val.queueType.toLocaleLowerCase().includes(args)) || (val.category.name.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
