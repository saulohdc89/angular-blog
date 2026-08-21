import { Component, input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard {
  category = input.required<string>();
  title = input.required<string>();
  author = input.required<string>();
  date = input.required<string>();
}
