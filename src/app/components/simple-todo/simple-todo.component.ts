import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-todo.component.html',
  styleUrl: './simple-todo.component.scss',
})
export class SimpleTodoComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() === '') {
      alert('Task cannot be empty');
      this.newTask = '';
      return;
    }

    this.tasks.push(this.newTask.trim());
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
