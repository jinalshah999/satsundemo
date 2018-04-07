import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './demo2/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Task[], args: string): any {
    return value.filter((x)=>x.Title.indexOf(args)!==-1);
  }

}
