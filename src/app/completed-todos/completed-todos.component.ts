import { DataWorkerService } from './../services/data-worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent implements OnInit {

  completedTodosArray = [];

  constructor(private service: DataWorkerService) { }

  ngOnInit() {
  }


}
