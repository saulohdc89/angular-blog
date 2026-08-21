import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { BigCard } from './big-card/big-card';
import { SmallCard } from './small-card/small-card';

@Component({
  selector: 'app-root',
  imports: [Menu, RouterOutlet, BigCard, SmallCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-blog';
}
