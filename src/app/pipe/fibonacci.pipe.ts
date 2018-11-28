import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

const fibonacci = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Pipe({
  name: 'fibonacci',
  pure: true
})
export class FibonacciPipe implements PipeTransform {

  @memo()
  transform(value: any, args?: any): any {
    console.log('calculating: ', value);
    return fibonacci(value);
  }

}
