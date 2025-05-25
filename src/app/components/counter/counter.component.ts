import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count: number = 5;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
