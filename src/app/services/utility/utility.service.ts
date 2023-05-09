import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/model/i-todo';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sortArrayAlphabetically(array:ITodo[]):ITodo[]{
    const newArray = [...array] // clono l'array in entrata;
    newArray.sort((a,b)=> a.title.localeCompare(b.title));

    return newArray
  }
}
