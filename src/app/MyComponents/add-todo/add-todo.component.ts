import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Todo } from '../../Todo';

@Component({
  standalone: true, // Ensures this is a standalone component
  selector: 'app-add-todo',
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'] // Fixed `styleUrls` typo
})
export class AddTodoComponent implements OnInit {

  title: string;
  desc:string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
  // Component logic here
  // todoTitle: string = ''; // Example property for ngModel
}