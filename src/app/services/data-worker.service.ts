import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';


@Injectable()
export class DataWorkerService {

  private _url = "http://localhost:3000/api/todos";
  constructor(private http: Http) { }

  completeTodo(id, todo) {
    return this.http.put(this._url + '/update/' + id, todo);
  }

  fetchTodos() {
    return this.http.get(this._url);
  }

  addTodo(todo){
    return this.http.post(this._url, todo);
  }

  deleteTodo(id) {
    let _delUrl = this._url + '/' + id;
    return this.http.delete(_delUrl);
  }
}
