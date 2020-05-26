import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConvertor'
})
export class DateConvertorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
