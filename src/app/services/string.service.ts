import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  
  firstLetterToUpper(word){
    var value;
    var tempValue = word.toLowerCase();
    value = tempValue.charAt(0).toUpperCase() + tempValue.substr(1);

    console.log(value);
    return value;
  }
    
}
