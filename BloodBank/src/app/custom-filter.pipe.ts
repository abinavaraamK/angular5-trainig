import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(arr: any[], field1: string,field2: string, value1: any,value2: any): any {
    if (!arr)
      return [];
    if (!field1 || !field2)
      return [];
    if(value1 === 'OAS' || value2 === ' ') {
      return arr;
    }
    let retArr = arr.filter(val => val[field1].includes(value1));
    let retArr1 = retArr.filter(val => val[field2].includes(value2));
    return new Set(retArr1);
  }

}
