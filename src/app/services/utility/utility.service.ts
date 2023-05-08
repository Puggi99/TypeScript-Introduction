import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sortArrayAlphabetically(array:Todo[]):Todo[]{
    const newArray = [...array] // clono l'array in entrata;
    newArray.sort((a,b)=> a.title.localeCompare(b.title));

    return newArray
  }
}
