import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let type = Number(value);
    if(type==1){
      return 'Tenant'
    }
    if(type==2){
      return 'EcMember'
    }
    if(type==3){
      return 'Agent'
    }
    if(type==0){
      return 'Admin'
    }
    return 'Not Found';
  }

}
