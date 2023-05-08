import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoArray: Todo[] = []

  constructor(private utilityService: UtilityService){
    // this.utilityService = utilityService;

    const todo1 = new Todo('comprare il pane', false)
    const todo2 = new Todo('chiamare la nonna', false)
    const todo3 = new Todo('pagare la bolletta', false)

    this.todoArray = [todo1,todo2,todo3]
  }

  sortTodo(){
    this.todoArray = this.utilityService.sortArrayAlphabetically(this.todoArray)
  }
}



