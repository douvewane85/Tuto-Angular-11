import { Pipe, PipeTransform } from '@angular/core';
import { Technology } from '../models/technology';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(technos: Technology[],id:number): Technology[] {
    return id==0?technos:technos.filter(techno=>techno.type.id==id) ;
  }

}
