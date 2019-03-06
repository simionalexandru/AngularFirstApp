import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todosArray:Todo[] = [
    {
      id : 1,
      title: 'Todo title', 
      done: false,
      creationDate: new Date()
    },
    {
      id : 2,
      title: 'GIGI', 
      done: false,
      creationDate: new Date()
    },
    {
      id : 3,
      title: 'Todo TOTO', 
      done: false,
      creationDate: new Date()
    },
    {
      id : 4,
      title: 'Todo JOHN', 
      done: false,
      creationDate: new Date()
    },
    {
      id : 5,
      title: 'Todo ALEX', 
      done: false,
      creationDate: new Date()
    }
  ]

  constructor() { }

  ngOnInit() {
    console.log('TodoListComponent-----------------------> ON INIT');
  }

  onCheckToDoFromReduce(checkedToDo:Todo){
    console.log('----------------> checkedToDo',  checkedToDo);
    let index = this.todosArray.findIndex(elem =>elem.id == checkedToDo.id);

    if(index !== -1){
      this.todosArray[index].done = true;
    }
  }



}
