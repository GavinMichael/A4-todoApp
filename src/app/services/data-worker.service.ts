import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/Http';


@Injectable()
export class DataWorkerService {

  public completedTodo = new Subject<any>();

  constructor(private http: Http) { }

  completeTodo(todo) {
    this.completedTodo.next(todo);
  }

  fetchTodos() {
    return this.http.get('http://localhost:3000/api/todos');
  }

  addTodo(todo){
    return this.http.post('http://localhost:3000/api/todos', todo);
  }
}
