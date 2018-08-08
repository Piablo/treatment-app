import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  
  constructor() { }
  
  firstLetterToUpper(word){
    var value;
    try{
      
      var tempValue = word.toLowerCase();
      value = tempValue.charAt(0).toUpperCase() + tempValue.substr(1);
    }finally{
      return value;
    }
  }
  
}
