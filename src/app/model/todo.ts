export class Todo{             // in angular, le classi devono essere sempre export
  title: string;
  isComplete: boolean;


  constructor(title: string, isComplete: boolean){
    this.title = title;
    this.isComplete = isComplete;

  }


}
