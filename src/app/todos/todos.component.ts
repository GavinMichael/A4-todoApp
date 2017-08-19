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
        console.log(this.todosArray);
        
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
        let newTodoId = Response.json()._id;
        // add the id to the
        newTodo['_id'] = newTodoId;
      })
    
    f.reset();
  }

  completeTodo(todo) {
    // find the index of the todo that was passed in
    let index = this.todosArray.indexOf(todo);
    // splice it out
    this.todosArray.splice(index, 1);
    // Get the ID of the obj
    let id = todo._id;
    // change the status
    todo.status = 'Complete';   
    // put HTTP req
    this.service.completeTodo(id, todo)
      .subscribe(Response => {
        console.log(Response);        
      })

  }  

  deleteTodo(todo) {
    // find the index of the todo that was passed in
    let index = this.todosArray.indexOf(todo);
    // splice it out
    let deletedTodo = {};
    deletedTodo = this.todosArray.splice(index, 1);
    // Get the ID of the obj
    let id = deletedTodo[0]['_id'];
    // delete HTTP req
    this.service.deleteTodo(id)
      .subscribe(Response => {
        console.log(Response);
      })
  }

}
