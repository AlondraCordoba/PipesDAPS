import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalHexadecimal'
})
export class DecimalHexadecimalPipe implements PipeTransform {

  decimal = 0;
  residuo = 0;
  res = '';
  hexadecimal = '';

  transform(value: number): string {
    this.decimal = value;
    while (this.decimal !== 0)
    {
      this.residuo = Math.trunc(this.decimal % 16);
      switch (this.residuo)
      {
        case 1:  this.res = '1'; break;
        case 2:  this.res = '2'; break;
        case 3:  this.res = '3'; break;
        case 4:  this.res = '4'; break;
        case 5:  this.res = '5'; break;
        case 6:  this.res = '6'; break;
        case 7:  this.res = '7'; break;
        case 8:  this.res = '8'; break;
        case 9:  this.res = '9'; break;
        case 10: this.res = 'A'; break;
        case 11: this.res = 'B'; break;
        case 12: this.res = 'C'; break;
        case 13: this.res = 'D'; break;
        case 14: this.res = 'E'; break;
        case 15: this.res = 'F'; break;
      }
      this.hexadecimal = this.res + this.hexadecimal ;
      this.decimal = Math.trunc(this.decimal / 16);
    }
    return this.hexadecimal;
  }

}
