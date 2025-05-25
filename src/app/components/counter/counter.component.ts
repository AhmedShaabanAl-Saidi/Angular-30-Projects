import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
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

  GetCounterState(): string {
    if (this.count > 0) {
      return 'positive';
    } else if (this.count < 0) {
      return 'negative';
    } else {
      return 'neutral';
    }
  }
}
