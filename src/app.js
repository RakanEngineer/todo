import {Todo} from './todo';

export class App {
  constructor() {
    this.message = 'Hello World!';
    this.todo = new Todo('clean my room');
    this.todo.done=true;
  }
 
}
