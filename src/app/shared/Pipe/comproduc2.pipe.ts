import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comproduc2'
})
export class Comproduc2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
