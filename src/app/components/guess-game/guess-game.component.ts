import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-game',
  imports: [FormsModule, CommonModule],
  templateUrl: './guess-game.component.html',
  styleUrl: './guess-game.component.scss',
})
export class GuessGameComponent {
  secretNumber: number = this.GenerateRandomNumber();
  attemptsLeft: number = 10;
  guessedNumber?: number;
  feedbackMessage: string = '';
  gameOver: boolean = false;
  private static readonly MAX_ATTEMPTS: number = 10;
  private static readonly MAX_NUMBER: number = 100;

  private GenerateRandomNumber(): number {
    return Math.floor(Math.random() * GuessGameComponent.MAX_NUMBER) + 1;
  }

  public IsValidGuess(guess?: number): boolean {
    return (
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessGameComponent.MAX_NUMBER
    );
  }

  public SubmitGuess(): void {
    if (!this.IsValidGuess(this.guessedNumber)) {
      this.feedbackMessage = `Please enter a number between 1 and ${GuessGameComponent.MAX_NUMBER}.`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }

  private evaluateGuess(): void {
    if (this.guessedNumber === this.secretNumber) this.EndGame(true);
    else if (this.attemptsLeft === 0) this.EndGame(false);
    else {
      this.feedbackMessage =
        this.guessedNumber! > this.secretNumber
          ? 'Too high! Try again.'
          : 'Too low! Try again.';
    }
  }

  private EndGame(isWin: boolean): void {
    this.gameOver = true;
    this.feedbackMessage = isWin
      ? `
    Congratulations! You've guessed the number ${this.secretNumber} correctly!`
      : `Game over! The Correct number was ${this.secretNumber}. Better luck next time!`;
  }

  public ResetGame(): void {
    this.secretNumber = this.GenerateRandomNumber();
    this.attemptsLeft = GuessGameComponent.MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false;
  }

  public getAlertClass(): string {
    if (this.gameOver && this.feedbackMessage.includes('Congratulations')) {
      return 'alert-success';
    } else if (this.gameOver && this.feedbackMessage.includes('Game over')) {
      return 'alert-danger';
    } else {
      return 'alert-warning';
    }
  }
}
