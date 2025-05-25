import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss',
})
export class StopwatchComponent {
  elapsedTime: number = 0;
  isRunning: boolean = false;
  intervalRef: any;

  startStopwatch() {
    this.isRunning ? this.stop() : this.start();
    console.log(`Stopwatch ${this.isRunning ? 'stopped' : 'started'}`);
  }

  private start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalRef = setInterval(() => {
        this.elapsedTime += 0.1;
      }, 100);

      console.log('Stopwatch started');
    }
  }

  private stop() {
    if (this.isRunning) {
      clearInterval(this.intervalRef);
      this.isRunning = false;
      console.log('Stopwatch stopped');
    }
  }

  reset(){
    this.stop();
    this.elapsedTime = 0;
    console.log('Stopwatch reset');
  }
}
