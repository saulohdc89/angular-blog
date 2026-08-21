import { Component, input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard {
  category = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  author = input.required<string>();
  date = input.required<string>();
}
