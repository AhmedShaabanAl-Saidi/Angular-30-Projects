import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  name: string = 'Ahmed Shaaban Al-Saidi';
  age: number = 25;
  description: string =
    'I am a software engineer with a passion for web development';
}
