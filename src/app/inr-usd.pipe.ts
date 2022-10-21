import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrUsd'
})
export class InrUsdPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 14;
  }

}
