import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidad'
})
export class CantidadPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if (args != null)
    {
      return '&' + value;
    }

    return null;
  }

}
