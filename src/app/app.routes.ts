import { Routes } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ProfileCard', component: ProfileCardComponent },
  { path: 'counter', component: CounterComponent },
  { path: '**', component: NotfoundComponent },
];
