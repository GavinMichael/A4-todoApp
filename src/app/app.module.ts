import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { DataWorkerService } from "./services/data-worker.service";
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from "@angular/Http";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletedTodosComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'active',
        component: TodosComponent
      },
      {
        path: 'completed',
        component: CompletedTodosComponent
      },
      {
        path: '**',
        component: HomeComponent
      },
    ])
  ],
  providers: [
    DataWorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
