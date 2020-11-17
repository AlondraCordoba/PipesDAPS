import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolarPeso'
})
export class DolarPesoPipe implements PipeTransform {

  transform(value: number, tasaCambio: number): any {
    return value + tasaCambio;
  }

}
