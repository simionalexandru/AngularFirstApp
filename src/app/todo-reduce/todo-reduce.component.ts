import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface/todo.interface';


@Component({
  selector: 'app-todo-reduce',
  templateUrl: './todo-reduce.component.html',
  styleUrls: ['./todo-reduce.component.css']
})


export class TodoReduceComponent implements OnInit {

  @Input() todoInput:Todo;
  @Output() onCheckToDoEvent:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('TodoReduceComponent-------------------------> ON INIT');
  }

  onCheckToDo(){
    console.log('-----------> onCheckToDo');
    this.onCheckToDoEvent.emit(this.todoInput);
  }

}
