import { Http } from '@angular/Http';
import { DataWorkerService } from './../services/data-worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosArray: any[];

  constructor(
    private service: DataWorkerService,
    private http: Http
  ) { }

  ngOnInit() {
    this.service.fetchTodos()
      .subscribe(Response => {
        this.todosArray = Response.json();
      })
  }

  addTodo(f) {
    // Date
    let date = new Date();
    let currDate = date.toDateString();

    let newTodo = {
      title: f.value.title,
      desc: f.value.desc,
      label: '',
      priority: 'Normal',
      addedOn: currDate,
      status: 'Active'
    };
    console.log(newTodo);
    
    // add to the current todoarray in view
    this.todosArray.splice(0, 0, newTodo);
    // post ot the server
    this.service.addTodo(newTodo)
      .subscribe(Response => {
        console.log("new Todo Added");
        // add the id to the
      })
  }

  completeTodo(index) {
    let completedTodo = this.todosArray.splice(index, 1);
    // call the method from the service and pass the todo
    this.service.completeTodo(completedTodo);

  }
  

  deleteTodo(index) {
    this.todosArray.splice(index, 1);
    // and some delete req to the server
  }

  testFunc(test: HTMLInputElement) {
    
    let postObj = {
      "title": test.value,
      "desc": ''
    } 
    console.log(postObj);
    this.http.post('http://localhost:3000/api/todos', postObj)
      .subscribe(Response => {
        console.log(Response);        
      })
  }
}
