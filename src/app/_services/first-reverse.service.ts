import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstReverseService {

  constructor() { }

  run(str: string): string {

    /*
    easy solution
    -------------
    const array = str.split('');
    const result = array.reverse().join('');
    */

    let reversed = '';

    for (let index = str.length; index >= 0; index--) {
      reversed += str.substr(index, 1);
    }

    return reversed;

  }
}
